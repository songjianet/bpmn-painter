<template>
  <div class="right-panel-default-container">
    <div class="title">{{cName}}</div>
  </div>
</template>

<script>
export default {
  name: 'ClickToSendTemplateMessage',
  props: ['element'],
  data() {
    return {
      cName: '用户点击链接后回复模板消息'
    }
  },
  mounted() {
    let param = JSON.parse(window.sessionStorage.getItem('params'))

    param[String(this.element.id)] = {
      'name': this.cName,
      'flowable:class': 'wx:TemplateMes'
    }

    window.sessionStorage.setItem('params', JSON.stringify(param))
  }
}
</script>

<style lang="scss" scoped>
.right-panel-default-container {
  width: 100%;

  .title {
    height: 40px;
    line-height: 37px;
    padding: 0 10px;
    border-bottom: 3px solid rgb(31, 41, 46);
    font-size: 12px;
    font-weight: 600;
    color: rgb(31, 41, 46);
    display: flex;
    justify-content: center;
  }
}
</style>
