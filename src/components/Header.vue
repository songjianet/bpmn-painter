<template>
  <div class="header-container">
    <el-button @click="canvasToXML">xml</el-button>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    canvasToXML() {
      this.$emit('canvasToXML')
    }
  }
}
</script>

<style lang="scss" scoped>
.header-container {
  position: relative;
  height: 52px;
  background: rgb(255, 255, 255);
  box-shadow: rgba(100, 100, 100, 0.2) 0px 2px 3px 0px;
  border-bottom: 0px solid transparent;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  z-index: 107;
}
</style>
