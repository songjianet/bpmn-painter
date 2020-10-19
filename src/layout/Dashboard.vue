<template>
  <div class="container">
    <b-p-m-n-header></b-p-m-n-header>
    <div class="content">
      <div class="canvas" ref="canvas"></div>
      <b-p-m-n-right-pane></b-p-m-n-right-pane>
    </div>
  </div>
</template>

<script>
import BPMNHeader from '@/components/Header'
import BPMNRightPane from '@/components/RightPane'
// import bpmnData from '@/assets/js/bpmnData'
import defaultXML from '@/assets/js/defaultXML'
import Modeler from 'bpmn-js/lib/Modeler'

export default {
  name: 'Dashboard',
  data() {
    return {
      modeler: null,
      xml: ''
    }
  },
  mounted() {
    this.modeler = new Modeler({
      container: this.$refs.canvas
    })

    !this.xml ? this.init(defaultXML()) : this.init(this.xml)
  },
  methods: {
    async init(xml) {
      xml = xml.replace(/<!\[CDATA\[(.+)]]>/g, '&lt;![CDATA[$1]]&gt;')

      try {
        await this.modeler.importXML(xml)
      } catch (err) {
        console.error(err.message, err.warnings)
      }
    }
  },
  components: {
    BPMNHeader,
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
    width: calc(100% - 300px);
  }
}
</style>
