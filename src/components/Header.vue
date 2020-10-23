<template>
  <div class="header-container">
    <div class="toolbar-left">
      <div class="back-icon">
        <i class="el-icon-arrow-left"></i>
      </div>
      <div class="workflow-name">test项目</div>
    </div>
    <div class="toolbar-center">
      <div class="arrow-left">
        <i class="el-icon-d-arrow-left"></i>
        <p>后退</p>
      </div>
      <div class="arrow-right">
        <i class="el-icon-d-arrow-right"></i>
        <p>前进</p>
      </div>
      <div class="rank" @click="fitViewport">
        <i class="el-icon-rank"></i>
        <p>适应画布</p>
      </div>
      <div class="scale-zoom-in">
        <i class="el-icon-zoom-in"></i>
        <p>放大</p>
      </div>
      <div class="scale-zoom-out">
        <i class="el-icon-zoom-out"></i>
        <p>缩小</p>
      </div>
      <div class="scale-view" @click="isShowScaleView">
        <i class="el-icon-files"></i>
        <p>缩略预览</p>
      </div>
    </div>
    <div class="toolbar-right">
      <div class="open">
        <i class="el-icon-folder-opened"></i>
        <p>打开</p>
      </div>
      <div class="create">
        <i class="el-icon-circle-plus-outline"></i>
        <p>新建</p>
      </div>
      <div class="revert" @click="revert">
        <i class="el-icon-refresh"></i>
        <p>重做</p>
      </div>
      <div class="xml" @click="downloadXML">
        <i class="el-icon-download"></i>
        <p>xml</p>
      </div>
      <div class="svg" @click="downloadSVG">
        <i class="el-icon-download"></i>
        <p>svg</p>
      </div>
      <div class="save" @click="canvasToXML">
        <i class="el-icon-upload2"></i>
        <p>保存</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    revert() {
      this.$emit('revert')
    },

    fitViewport() {
      this.$emit('fitViewport')
    },

    downloadSVG() {
      this.$emit('downloadSVG')
    },

    downloadXML() {
      this.$emit('downloadXML')
    },

    canvasToXML() {
      this.$emit('canvasToXML')
    },

    isShowScaleView() {
      this.$emit('isShowScaleView')
    }
  }
}
</script>

<style lang="scss" scoped>
.header-container {
  position: relative;
  height: 50px;
  background: rgb(255, 255, 255);
  box-shadow: rgba(100, 100, 100, 0.2) 0 2px 3px 0;
  border-bottom: 0 solid transparent;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  z-index: 107;

  .toolbar-left {
    width: 250px;
    display: flex;

    .back-icon {
      width: 50px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-size: 20px;
      color: rgb(141, 158, 167);
      cursor: pointer;

      &:hover {
        background-color: #f0f0f0;
      }
    }

    .workflow-name {
      line-height: 50px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: rgb(82, 94, 113);
      font-size: 14px;
      padding: 0 10px;
      font-weight: 500;
    }
  }

  .toolbar-center {
    width: 300px;
    display: flex;

    .arrow-left, .arrow-right, .scale-zoom-in, .scale-zoom-out, .rank, .scale-view {
      min-width: 50px;
      display: flex;
      flex-direction: column;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      height: 50px;
      cursor: pointer;
      color: rgb(65, 80, 88);

      i {
        font-size: 20px;
      }

      p {
        font-size: 12px;
        font-weight: 500;
      }

      &:hover {
        background-color: #f0f0f0;
        color: #005df7;
      }
    }
  }

  .toolbar-right {
    flex-basis: 300px;
    display: flex;
    justify-content: flex-end;

    .xml, .svg, .save, .open, .create, .revert {
      width: 50px;
      display: flex;
      flex-direction: column;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      height: 50px;
      cursor: pointer;
      color: rgb(65, 80, 88);

      i {
        font-size: 20px;
      }

      p {
        font-size: 12px;
        font-weight: 500;
      }

      &:hover {
        background-color: #f0f0f0;
        color: #005df7;
      }
    }
  }
}
</style>
