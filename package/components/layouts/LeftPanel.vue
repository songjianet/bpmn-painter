<template>
  <div class="left-panel-container">
    <div v-for="(item, index) in shapeGroup" :key="index" @click="currentShape(item.name)">
      <el-tooltip class="item" effect="dark" :content="item.name" placement="right">
        <img class="shape-group-image" :src="item.image" alt="">
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
    this.shapeGroup = Array.from(new Set(this.data.map(item => item.shapeGroup))).map(item => {
      if (item === '触点类型') {
        return { name: item, image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/chudianleixing/chudianleixing.png' }
      } else if (item === '沟通渠道') {
        return { name: item, image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/goutongqudao/goutongqudao.png' }
      } else if (item === '激励方式') {
        return { name: item, image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/jilifangshi/jilifangshi.png' }
      } else if (item === '事件集合') {
        return { name: item, image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/shijianjihe/shijianjihe.png' }
      } else if (item === '数字平台') {
        return { name: item, image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/shuzipingtai/shuzipingtai.png' }
      } else if (item === '人群选择') {
        return { name: item, image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/renqunxuanze/renqunxuanze.png' }
      } else if (item === '规则中心') {
        return { name: item, image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/guizezhongxin/guizezhongxin.png' }
      } else if (item === '活动团队') {
        return { name: item, image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/huodongtuandui/huodongtuandui.png' }
      } else if (item === '流程控制') {
        return { name: item, image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/liuchengkongzhi/liuchengkongzhi.png' }
      } else if (item === '系统内置') {
        return { name: item, image: 'https://zdgg-scrm.oss-cn-shanghai.aliyuncs.com/bpmn/xitongneizhi/xitongneizhi.png' }
      }
    })
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
    width: 20px;
    height: 20px;
    padding: 15px;
    text-align: center;
    cursor: pointer;
    overflow: hidden;

    &:hover {
      color: #005df7;
    }

    .shape-group-image {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
