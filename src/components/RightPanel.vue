<template>
  <div class="right-panel-container">
    <default v-if="!element || element.type === 'bpmn:Process'"></default>
    <start v-if="element ? element.type === 'bpmn:StartEvent' : ''" :element="element"></start>
    <task v-if="element ? element.type === 'bpmn:Task' : ''" :element="element"></task>
  </div>
</template>

<script>
import Default from '@/components/lib/Default'
import Start from '@/components/lib/Start'
import Task from '@/components/lib/Task'

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
  methods: {

  },
  computed: {
    getElement() {
      return this.$store.state.element
    }
  },
  watch: {
    getElement: function (val) {
      console.log(val)
      this.element = val
    }
  },
  components: {
    Default,
    Start,
    Task
  }
}
</script>

<style lang="scss" scoped>
.right-panel-container {
  padding-top: 50px;
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
