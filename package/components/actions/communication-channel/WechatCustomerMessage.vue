<template>
  <div class="right-panel-components-container">
    <div class="title">{{element.title}}</div>
  </div>
</template>

<script>
export default {
  name: 'WechatCustomerMessage',
  props: ['element'],
  mounted() {
    let param = JSON.parse(window.sessionStorage.getItem('params'))
    param[String(this.element.id)] = {
      'name': this.element.title,
      'flowable:class': 'wx:TemplateMes'
    }
    window.sessionStorage.setItem('params', JSON.stringify(param))
  }
}
</script>

<style lang="scss" scoped>
@import "package/styles/right-panel-container";
</style>
