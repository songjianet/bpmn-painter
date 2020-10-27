import wechatSubscriptionOfficialAccounts from '@/assets/images/palette/wechatSubscriptionOfficialAccounts.png'
import automaticallyReplyToSubscriberMessages from '@/assets/images/palette/automaticallyReplyToSubscriberMessages.png'
import endProcess from '@/assets/images/palette/endProcess.png'
import clickTheGreetingLink from '@/assets/images/palette/clickTheGreetingLink.png'
import clickToSendTemplateMessage from '@/assets/images/palette/clickToSendTemplateMessage.png'

/**
 * 存储左侧窗口流程设计相关数据
 * @author songjianet
 * */
export default class BPMNData {
  constructor() {
    this.controls = [] // 设计器控件
    this.init()
  }

  init() {
    this.controls = [
      {
        action: 'create.wechat-subscription-official-accounts',
        image: wechatSubscriptionOfficialAccounts,
        title: '订阅微信公众号',
        type: 'bpmn:StartEvent',
        group: 'event',
        className: 'icon-custom wechat-subscription-official-accounts'
      },
      {
        action: 'create.automatically-reply-to-subscriber-messages',
        image: automaticallyReplyToSubscriberMessages,
        title: '自动回复订阅用户消息',
        type: 'bpmn:ServiceTask',
        group: 'activity',
        className: 'icon-custom automatically-reply-to-subscriber-messages'
      },
      {
        action: 'create.click-to-send-template-message',
        image: clickToSendTemplateMessage,
        title: '点击链接回复模板消息',
        type: 'bpmn:ServiceTask',
        group: 'activity',
        className: 'icon-custom click-to-send-template-message'
      },
      {
        action: 'create.click-the-greeting-link',
        image: clickTheGreetingLink,
        title: '点击问候链接',
        type: 'bpmn:UserTask',
        group: 'activity',
        className: 'icon-custom click-the-greeting-link'
      },
      {
        action: 'create.end-process',
        image: endProcess,
        title: '结束流程',
        type: 'bpmn:EndEvent',
        group: 'event',
        className: 'icon-custom end-process'
      }

      // {
      //   action: 'create.start-event',
      //   image: '',
      //   title: '开始'
      // },
      // {
      //   action: 'create.intermediate-event',
      //   image: '',
      //   title: '中间'
      // },
      // {
      //   action: 'create.end-event',
      //   image: '',
      //   title: '结束'
      // },
      // {
      //   action: 'create.exclusive-gateway',
      //   image: '',
      //   title: '网关'
      // },
      // {
      //   action: 'create.task',
      //   image: '',
      //   title: '任务'
      // },
      // {
      //   action: 'create.user-task',
      //   image: '',
      //   title: '用户任务'
      // },
      // {
      //   action: 'create.user-sign-task',
      //   image: '',
      //   title: '会签任务'
      // },
      // {
      //   action: 'create.subprocess-expanded',
      //   image: '',
      //   title: '子流程'
      // },
      // {
      //   action: 'create.data-object',
      //   image: '',
      //   title: '数据对象'
      // },
      // {
      //   action: 'create.data-store',
      //   image: '',
      //   title: '数据存储'
      // },
      // {
      //   action: 'create.participant-expanded',
      //   image: '',
      //   title: '扩展流程'
      // },
      // {
      //   action: 'create.group',
      //   image: '',
      //   title: '分组'
      // }
    ]
  }

  /**
   * 获取控件配置信息
   * @author songjianet
   * */
  getControl(action) {
    const result = this.controls.filter(item => item.action === action)
    return result[0] || {}
  }

  /**
   * 循环创建出一系列的元素
   * @param {Object} fn 处理的函数
   */
  batchCreateCustom(fn) {
    const customs = {}
    this.controls.forEach(item => {
      customs[item['action']] = fn(item.type, item.group, item.className, item.title, item.action)
    })

    return customs
  }
}
