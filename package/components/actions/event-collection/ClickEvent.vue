<template>
  <div class="right-panel-components-container">
    <div class="title">{{element.title}}</div>
  </div>
</template>

<script>
export default {
  name: 'ClickEvent',
  props: ['element'],
  mounted() {
    this.initData()
  },
  methods: {
    initData() {
      let params = JSON.parse(window.sessionStorage.getItem('params'))

      params[String(this.element.id)] = {
        'nodeVals': {
          'msgexpres': 'clicked'
        }
      }

      window.sessionStorage.setItem('params', JSON.stringify(params))
    }
  }
}
</script>

<style lang="scss" scoped>
@import "package/styles/right-panel-container";
</style>
