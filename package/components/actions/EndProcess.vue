<template>
  <div class="right-panel-default-container">
    <div class="title">{{cName}}</div>
  </div>
</template>

<script>
export default {
  name: 'EndProcess',
  data() {
    return {
      cName: '结束流程'
    }
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
