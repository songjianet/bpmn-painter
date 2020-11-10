/**
 * 重写bpmn.js中的ContextPad类
 * @author songjianet
 * */
export default function ContextPad(contextPad, config, injector, translate, bpmnFactory, elementFactory, create, modeling, connect) {
  this.create = create
  this.elementFactory = elementFactory
  this.translate = translate
  this.bpmnFactory = bpmnFactory
  this.modeling = modeling
  this.connect = connect
  config = config || {}
  if (config.autoPlace !== false) {
    this._autoPlace = injector.get('autoPlace', false)
  }
  contextPad.registerProvider(this)
}

/**
 * 注入变量
 * @author songjianet
 * */
ContextPad.$inject = [
  'contextPad',
  'config',
  'injector',
  'translate',
  'bpmnFactory',
  'elementFactory',
  'create',
  'modeling',
  'connect'
]

/**
 * 覆盖ContextPad原型链上的getContextPadEntries方法
 * @author songjianet
 * */
ContextPad.prototype.getContextPadEntries = function(element) {
  const {
    modeling,
    translate,
    connect
  } = this

  function startConnect(event, element) {
    connect.start(event, element)
  }

  function createConnect() {
    return {
      group: 'connect',
      className: 'icon-custom icon-custom-connection-line',
      title: '连接线',
      action: {
        click: startConnect,
        dragstart: startConnect
      }
    }
  }

  function removeElement() {
    modeling.removeElements([element])
  }

  function deleteElement() {
    return {
      group: 'edit',
      className: 'icon-custom icon-custom-delete',
      title: translate('删除'),
      action: {
        click: removeElement
      }
    }
  }

  return {
    'connect': createConnect(),
    'delete': deleteElement()
  }
}
