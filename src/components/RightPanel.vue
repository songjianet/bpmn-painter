<template>
  <div class="right-panel-container">
    <component :is="currentProperties"></component>
  </div>
</template>

<script>
import { horizontalLineToUpperCase } from '@/utils/horizontalLineToUpperCase'

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
      currentProperties: ''
    }
  },
  mounted() {
    this.initComponent('Default')
  },
  methods: {
    initComponent(component) {
      this.currentProperties = () => import(`@/components/lib/${component}`)
    }
  },
  computed: {
    getElement() {
      return this.$store.state.element
    }
  },
  watch: {
    getElement: function (val) {
      val.action ?
          this.initComponent(horizontalLineToUpperCase(val.action.split('.')[1])) :
          this.initComponent('Default')
    }
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
