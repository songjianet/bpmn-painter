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
  const {
    create,
    elementFactory
  } = this

  /**
   * 订阅微信公众号
   * @author songjianet
   * */
  function wechatSubscriptionOfficialAccounts() {
    return function(event) {
      const shape = elementFactory.createShape({
        type: 'bpmn:ServiceTask',
        action: 'create.wechat-subscription-official-accounts'
      })
      create.start(event, shape)
    }
  }

  /**
   * 自动回复订阅用户消息
   * @author songjianet
   * */
  function automaticallyReplyToSubscriberMessages() {
    return function(event) {
      const shape = elementFactory.createShape({
        type: 'bpmn:ServiceTask',
        action: 'create.automatically-reply-to-subscriber-messages'
      })
      create.start(event, shape)
    }
  }

  return {
    'create.wechat-subscription-official-accounts': {
      group: 'start',
      className: 'icon-custom wechat-subscription-official-accounts',
      title: '用户订阅微信公众号',
      action: {
        dragstart: wechatSubscriptionOfficialAccounts(),
        click: wechatSubscriptionOfficialAccounts()
      }
    },
    'create.automatically-reply-to-subscriber-messages': {
      group: 'model',
      className: 'icon-custom automatically-reply-to-subscriber-messages',
      title: '自动回复订阅用户消息',
      action: {
        dragstart: automaticallyReplyToSubscriberMessages(),
        click: automaticallyReplyToSubscriberMessages()
      }
    }
  }
}
