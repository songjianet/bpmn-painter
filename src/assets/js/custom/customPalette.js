/**
 * 重写bpmn.js中的PaletteProvider类
 * @author songjianet
 * */
export default function PaletteProvider(palette, create, elementFactory, globalConnect) {
  this.create = create
  this.elementFactory = elementFactory
  this.globalConnect = globalConnect

  palette.registerProvider(this)
}

/**
 * 注入变量
 * @author songjianet
 * */
PaletteProvider.$inject = [
  'palette',
  'create',
  'elementFactory',
  'globalConnect'
]

/**
 * 覆盖PaletteProvider原型链上的getPaletteEntries方法
 * @author songjianet
 * */
PaletteProvider.prototype.getPaletteEntries = function() {
  const {
    create,
    elementFactory
  } = this

  function createTask() {
    return function(event) {
      const shape = elementFactory.createShape({
        type: 'bpmn:Task'
      });
      console.log(shape) // 只在拖动或者点击时触发
      create.start(event, shape)
    }
  }

  return {
    'create.wechat-start': {
      group: 'model',
      className: 'icon-custom wechat-start',
      title: '创建一个微信流程的开始节点',
      action: {
        dragstart: createTask(),
        click: createTask()
      }
    }
  }
}
