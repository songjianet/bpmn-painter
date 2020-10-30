<template>
  <bpmn-painter
      :data="data"
      @save="save">
  </bpmn-painter>
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
import '../dist/bpmn-painter.css'
import '../package/assets/scss/default.scss'

export default {
  data() {
    return {
      data: [
        {
          action: 'create.wechat-subscription-official-accounts',
          image: wechatSubscriptionOfficialAccounts,
          title: '用户订阅公众号',
          type: 'bpmn:StartEvent',
          group: 'event'
        },
        {
          action: 'create.automatically-reply-to-subscriber-messages',
          image: automaticallyReplyToSubscriberMessages,
          title: '自动回复订阅用户消息',
          type: 'bpmn:ServiceTask',
          group: 'activity'
        },
        {
          action: 'create.click-to-send-template-message',
          image: clickToSendTemplateMessage,
          title: '用户点击链接后回复模板消息',
          type: 'bpmn:ServiceTask',
          group: 'activity'
        },
        {
          action: 'create.click-the-greeting-link',
          image: clickTheGreetingLink,
          title: '用户点击问候链接',
          type: 'bpmn:UserTask',
          group: 'activity'
        },
        {
          action: 'create.end-process',
          image: endProcess,
          title: '结束流程',
          type: 'bpmn:EndEvent',
          group: 'event'
        }
      ]
    }
  },
  methods: {
    save(data) {
      console.log(data)
    }
  },
  components: {
    BpmnPainter
  }
}
</script>
