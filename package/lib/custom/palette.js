import { batchCreateCustom } from '../bpmn-data'

/**
 * 重写bpmn.js中的PaletteProvider类
 * @author songjianet
 * */
export default function Palette(palette, create, elementFactory, globalConnect) {
  this.create = create
  this.elementFactory = elementFactory
  this.globalConnect = globalConnect

  palette.registerProvider(this)
}

/**
 * 注入变量
 * @author songjianet
 * */
Palette.$inject = [
  'palette',
  'create',
  'elementFactory',
  'globalConnect'
]

/**
 * 覆盖PaletteProvider原型链上的getPaletteEntries方法
 * @author songjianet
 * */
Palette.prototype.getPaletteEntries = function() {
  let actions = {}

  const {
    create,
    elementFactory
  } = this

  /**
   * 创建所有的palette下的action
   * @author songjianet
   * */
  const createAction = (type, group, title, action) => {

    const createListener = (event) => {
      const shape = elementFactory.createShape({type, action})
      create.start(event, shape)
    }

    return {
      group,
      title,
      action: {
        dragstart: createListener,
        click: createListener
      }
    }
  }

  Object.assign(actions, {
    ...batchCreateCustom(createAction)
  })

  return actions
}
