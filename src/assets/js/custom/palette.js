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
Palette.prototype.getPaletteEntries = function(element) {
  const {
    create,
    elementFactory
  } = this

  function clickElement() {
    console.log(element)
    store.commit('SETNODEINFO', element)
    store.commit('TOGGLENODEVISIBLE', true)
  }

  function startEvent() {
    return function(event) {
      const shape = elementFactory.createShape({
        type: 'bpmn:StartEvent' // StartEvent开始、UserTask用户任务、Task任务、SequenceFlow流转线条、ExclusiveGateway排他网关、EndEvent结束
      })
      // console.log(shape) // 只在拖动或者点击时触发
      create.start(event, shape)
    }
  }

  function createTask() {
    return function(event) {
      const shape = elementFactory.createShape({
        type: 'bpmn:Task' // StartEvent开始、UserTask用户任务、Task任务、SequenceFlow流转线条、ExclusiveGateway排他网关、EndEvent结束
      })
      // console.log(shape) // 只在拖动或者点击时触发
      create.start(event, shape)
    }
  }

  return {
    'create.wechat-start': {
      group: 'start',
      className: 'icon-custom wechat-start',
      title: '创建一个微信流程的开始节点',
      action: {
        dragstart: startEvent(),
        click: startEvent()
      }
    },
    'create.wechat-sms': {
      group: 'model',
      className: 'icon-custom wechat-sms',
      title: '创建微信自动回复节点',
      action: {
        dragstart: createTask(),
        click: createTask()
      }
    }
  }
}
