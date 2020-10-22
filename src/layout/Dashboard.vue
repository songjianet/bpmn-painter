<template>
  <div class="container">
    <b-p-m-n-header @canvasToXML="canvasToXML"></b-p-m-n-header>
    <div class="content">
      <b-p-m-n-left-panel></b-p-m-n-left-panel>
      <div class="canvas" ref="canvas"></div>
      <b-p-m-n-right-panel v-if="modeler" :modeler="modeler"></b-p-m-n-right-panel>
    </div>
  </div>
</template>

<script>
import BPMNHeader from '@/components/Header'
import BPMNRightPanel from '@/components/RightPanel'
import BPMNLeftPanel from '@/components/LeftPanel'
import BPMNData from '@/assets/js/BPMNData'
import defaultXML from '@/assets/js/defaultXML'
import CustomModeler from '@/assets/js/customModeler'

export default {
  name: 'Dashboard',
  data() {
    return {
      modeler: null,
      xml: ''
    }
  },
  mounted() {
    this.modeler = new CustomModeler({
      container: this.$refs.canvas
    })

    !this.xml ? this.init(defaultXML()) : this.init(this.xml)
  },
  methods: {
    /**
     * 装载canvas
     * @author songjianet
     * */
    async init(xml) {
      xml = xml.replace(/<!\[CDATA\[(.+)]]>/g, '&lt;![CDATA[$1]]&gt;')

      try {
        await this.modeler.importXML(xml)
        this.setPalette()
        this.initEvent()
      } catch (err) {
        console.error('装载canvas出错：', err.message, err.warnings)
      }
    },

    /**
     * 装载并设置左侧工具栏面板
     * @author songjianet
     * */
    setPalette() {
      try {
        const canvas = this.$refs.canvas
        const djsPalette = canvas.children[0].children[1].children[4] // djsPalette是canvas节点下的一个类名
        const djsPaletteStyle = {
          width: '200px',
          padding: '8px 15px',
          background: 'white',
          left: 0,
          top: 0,
          borderRadius: 0,
          border: 'none',
          borderRight: 'solid 1px rgb(219, 219, 219)',
          height: 'calc(100vh - 52px)'
        }

        for (let key in djsPaletteStyle) {
          djsPalette.style[key] = djsPaletteStyle[key]
        }

        // djsPaletteEntriesGroups是djsPalette类所在节点的子节点djsPaletteEntries下的所有节点
        const djsPaletteEntriesGroups = djsPalette.children[0].children
        // djsPaletteEntriesGroups[0].style['display'] = 'none'

        for (let key in djsPaletteEntriesGroups) {
          const node = djsPaletteEntriesGroups[key]

          for (let nKey in node.children) {
            const control = node.children[nKey]

            const controlStyle = {
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              width: '100%',
              cursor: 'pointer'
            }

            if (
                control.className &&
                control.dataset &&
                control.className.indexOf('entry') !== -1
            ) {
              const controlProps = new BPMNData().getControl(control.dataset.action)

              control.innerHTML =
                  `
                    <img style="width: 30px;height: 30px;" src="${controlProps['image']}">
                    <div style='font-size: 14px;font-weight:500;margin-left:15px;'>${controlProps['title']}</div>
                  `

              for (let cnKey in controlStyle) {
                control.style[cnKey] = controlStyle[cnKey]
              }
            }
          }
        }
      } catch (e) {
        console.error('装载并设置左侧工具栏面板出错：', e)
      }
    },

    /**
     * 装载element的点击事件
     * @author songjianet
     * */
    initEvent() {
      this.modeler.on('element.click', e => {
        const { element } = e
        this.$store.commit('clickElement', element)
      })
    },

    /**
     * 装载element的点击事件
     * @author songjianet
     * */
    async canvasToXML(download = false) {
      try {
        let { xml } = await this.modeler.saveXML({ format: true })
        xml = xml.replace(/&lt;/g, '<')
        xml = xml.replace(/&gt;/g, '>')
        if (download) {
          this.downloadFile(`${this.getProcessElement().name}.bpmn20.xml`, xml, 'application/xml')
        } else {
          console.log(xml)
        }
        return xml
      } catch (err) {
        console.log(err)
      }
    }
  },
  components: {
    BPMNHeader,
    BPMNRightPanel,
    BPMNLeftPanel
  }
}
</script>

<style lang="scss" scoped>
@import "~bpmn-js/dist/assets/diagram-js.css";
@import "~bpmn-js/dist/assets/bpmn-font/css/bpmn.css";
@import "~bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css";
@import "~bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";

.content {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;

  .canvas {
    width: calc(100% - 350px);
    height: 100vh;
    padding-top: 50px;
    background-image: url("../assets/images/grid.png");
  }
}
</style>
