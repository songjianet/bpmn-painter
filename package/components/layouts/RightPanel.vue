<template>
  <div class="right-panel-container">
    <component :is="currentProperties" :element="element"></component>
  </div>
</template>

<script>
import { horizontalLineToUpperCase } from '../../../utils/horizontalLineToUpperCase'
import Default from '../actions/Default'
import WechatCustomerMessage from '../actions/communication-channel/WechatCustomerMessage'
import WechatTemplateMessage from '../actions/communication-channel/WechatTemplateMessage'
import End from '../actions/process-control/End'
import Begin from '../actions/process-control/Begin'
import BoundaryClock from '../actions/system-built-in/BoundaryClock'
import ClickEvent from '../actions/event-collection/ClickEvent'

export default {
  name: 'RightPanel',
  props: ['element'],
  data() {
    return {
      currentProperties: 'Default'
    }
  },
  mounted: function () {
    window.sessionStorage.setItem('params', JSON.stringify({}))
  },
  watch: {
    element: function (val) {
      val.action ? this.currentProperties = horizontalLineToUpperCase(val.action.split('.')[1]) : this.currentProperties = 'Default'
    }
  },
  components: {
    Default,
    WechatCustomerMessage,
    WechatTemplateMessage,
    End,
    Begin,
    BoundaryClock,
    ClickEvent
  }
}
</script>

<style lang="scss" scoped>
.right-panel-container {
  padding-top: 50px;
  position: relative;
  z-index: 13;
  width: 300px;
  height: 100vh;
  background: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  box-shadow: rgba(49, 64, 88, 0.21) 0px -2px 10px 0px;
}
</style>
