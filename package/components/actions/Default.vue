<template>
  <div class="right-panel-default-container">
    <div class="title">项目设置</div>
    <div class="project-name">
      <div>test项目</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Default'
}
</script>

<style lang="scss" scoped>
.right-panel-default-container {
  width: 100%;

  .title {
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
    border-bottom: 3px solid rgb(31, 41, 46);
    font-size: 12px;
    font-weight: 600;
    color: rgb(31, 41, 46);
    display: flex;
    justify-content: center;
  }

  .project-name {
    padding: 10px;
    width: 100%;
    color: rgb(65, 80, 88);
    font-size: 12px;
    font-weight: 600;
    border-bottom: 1px solid rgb(219, 219, 219);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
