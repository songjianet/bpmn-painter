<template>
  <bpmn-painter :data="data"></bpmn-painter>
</template>

<script>
import BpmnPainter from '../package/components/BpmnPainter'
import wechatSubscriptionOfficialAccounts
  from './assets/images/palette/wechatSubscriptionOfficialAccounts.png'
import automaticallyReplyToSubscriberMessages
  from './assets/images/palette/automaticallyReplyToSubscriberMessages.png'
import clickToSendTemplateMessage from './assets/images/palette/clickToSendTemplateMessage.png'
import clickTheGreetingLink from './assets/images/palette/clickTheGreetingLink.png'
import endProcess from './assets/images/palette/endProcess.png'

export default {
  data() {
    return {
      data: [
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
      ]
    }
  },
  components: {
    BpmnPainter
  }
}
</script>
