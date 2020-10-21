<template>
  <div class="right-panel-container">
    <start v-if="element" :element="element"></start>
  </div>
</template>

<script>
import Start from '@/components/lib/Start'

export default {
  name: 'RightPanel',
  props: {
    modeler: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      element: null
    }
  },
  mounted() {
    this.handleModelerEvent()
  },
  methods: {
    handleModelerEvent() {
      this.modeler.on('element.click', e => {
        const { element } = e
        this.element = element
        // if (element.type === 'bpmn:Process') {
        //   this.element = element
        // }
      })
    }
  },
  components: {
    Start
  }
}
</script>

<style lang="scss" scoped>
.right-panel-container {
  padding-top: 52px;
  position: relative;
  z-index: 13;
  width: 300px;
  height: 100vh;
  background: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  box-shadow: rgba(49, 64, 88, 0.21) 0px -2px 10px 0px;
}
</style>
