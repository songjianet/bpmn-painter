<template>
  <div class="right-panel-components-container">
    <div class="title">{{element.title}}</div>
  </div>
</template>

<script>
export default {
  name: 'ClickEvent',
  props: ['element']
}
</script>

<style lang="scss" scoped>
@import "package/styles/right-panel-container";
</style>
