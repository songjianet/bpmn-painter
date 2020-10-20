<template>
  <div class="left-panel-container">
    <div>
      <el-tooltip class="item" effect="dark" content="默认节点" placement="right">
        <i class="el-icon-edit"></i>
      </el-tooltip>
    </div>
    <div>
      <el-tooltip class="item" effect="dark" content="微信节点" placement="right">
        <i class="el-icon-chat-line-square"></i>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeftPanel'
}
</script>

<style lang="scss" scoped>
.left-panel-container {
  position: relative;
  z-index: 13;
  flex-shrink: 0;
  width: 50px;
  padding-top: 52px;
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

    :hover {
      color: #005df7
    }
  }
}
</style>
