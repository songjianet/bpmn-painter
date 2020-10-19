<template>
  <div class="container">
    <b-p-m-n-header></b-p-m-n-header>
    <div class="content">
      <b-p-m-n-left-pane></b-p-m-n-left-pane>
      <div class="canvas">
        <router-view></router-view>
      </div>
      <b-p-m-n-right-pane></b-p-m-n-right-pane>
    </div>
  </div>
</template>

<script>
import BPMNHeader from '@/components/Header'
import BPMNLeftPane from '@/components/LeftPane'
import BPMNRightPane from '@/components/RightPane'

export default {
  name: 'Dashboard',
  components: {
    BPMNHeader,
    BPMNLeftPane,
    BPMNRightPane
  }
}
</script>

<style lang="scss" scoped>
.content {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;

  .canvas {
    width: calc(100% - 400px);
  }
}
</style>
