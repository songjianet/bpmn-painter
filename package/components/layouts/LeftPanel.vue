<template>
  <div class="left-panel-container">
    <div v-for="(item, index) in shapeGroup" :key="index" @click="currentShape(item)">
      <el-tooltip class="item" effect="dark" :content="item" placement="right">
        <i class="el-icon-chat-line-square"></i>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeftPanel',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      shapeGroup: []
    }
  },
  mounted() {
    this.shapeGroup = Array.from(new Set(this.data.map(item => item.shapeGroup)))
  },
  methods: {
    currentShape(shapeGroup) {
      this.$emit('currentShape', shapeGroup)
    }
  }
}
</script>

<style lang="scss" scoped>
.left-panel-container {
  position: relative;
  z-index: 13;
  flex-shrink: 0;
  width: 49px;
  padding-top: 50px;
  background: rgb(255, 255, 255);
  border-right: 1px solid rgb(219, 219, 219);
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;

  > div {
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    cursor: pointer;

    &:hover {
      color: #005df7;
    }
  }
}
</style>
