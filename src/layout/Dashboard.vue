<template>
  <div class="container">
    <b-p-m-n-header
        :zoom="zoom"
        @setZoom="setZoom"
        @zoomIn="zoomIn"
        @zoomOut="zoomOut"
        @openLocalFile="openLocalFile"
        @previous="previous"
        @next="next"
        @revert="revert"
        @fitViewport="fitViewport"
        @downloadXML="downloadXML"
        @downloadSVG="downloadSVG"
        @canvasToXML="canvasToXML"
        @isShowScaleView="isShowScaleView">
    </b-p-m-n-header>
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
import minimapModule from 'diagram-js-minimap'

export default {
  name: 'Dashboard',
  data() {
    return {
      modeler: null,
      xml: '',
      zoom: 1
    }
  },
  mounted() {
    this.modeler = new CustomModeler({
      container: this.$refs.canvas,
      additionalModules: [
        minimapModule
      ]
    })

    this.modeler.get('minimap').open()

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
        const djsPalette = canvas.children[0].children[1].children[5] // djsPalette是canvas节点下的一个类名
        const minimap = canvas.children[0].children[1].children[4]

        minimap.style['display'] = 'none'

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
     * 打印xml
     * @author songjianet
     * */
    async canvasToXML() {
      try {
        let { xml } = await this.modeler.saveXML({ format: true })

        xml = xml.replace(/&lt;/g, '<')
        xml = xml.replace(/&gt;/g, '>')

        return xml
      } catch (err) {
        console.log(err)
      }
    },

    /**
     * 下载xml
     * @author songjianet
     * */
    async downloadXML() {
      try {
        let { xml } = await this.modeler.saveXML({ format: true })

        xml = xml.replace(/&lt;/g, '<')
        xml = xml.replace(/&gt;/g, '>')

        this.downloadFile(`${this.modeler.getDefinitions().rootElements[0].name}.bpmn2.0.xml`, xml, 'application/xml')

        return xml
      } catch (err) {
        console.log(err)
      }
    },

    /**
     * 下载图片
     * @author songjianet
     * */
    async downloadSVG() {
      try {
        const { svg } = await this.modeler.saveSVG({ format: true })

        this.downloadFile(this.modeler.getDefinitions().rootElements[0].name, svg, 'image/svg+xml')

        return svg
      } catch (err) {
        console.log(err)
      }
    },

    /**
     * 前端下载文件公共方法 TODO: 后续抽出去
     * @author songjianet
     * */
    downloadFile(filename, data, type) {
      const a = document.createElement('a')
      const url = window.URL.createObjectURL(new Blob([data], { type: type }))

      a.href = url
      a.download = filename
      a.click()

      window.URL.revokeObjectURL(url)
    },

    /**
     * 控制是否打开缩放预览
     * @author songjianet
     * */
    isShowScaleView() {
      const canvas = this.$refs.canvas
      const minimap = canvas.children[0].children[1].children[4]

      if (minimap.style.display === 'block') {
        minimap.style['display'] = 'none'
      } else {
        minimap.style['display'] = 'block'
      }
    },

    /**
     * 适应画布
     * @author songjianet
     * */
    fitViewport() {
      this.zoom = this.modeler.get('canvas').zoom('fit-viewport')

      const bBox = document.querySelector('.viewport').getBBox()
      const currentViewBox = this.modeler.get('canvas').viewbox()
      const elementMid = {
        x: bBox.x + bBox.width / 2 - 65,
        y: bBox.y + bBox.height / 2
      }

      this.modeler.get('canvas').viewbox({
        x: elementMid.x - currentViewBox.width / 2,
        y: elementMid.y - currentViewBox.height / 2,
        width: currentViewBox.width,
        height: currentViewBox.height
      })

      this.zoom = bBox.width / currentViewBox.width * 1.8
    },

    /**
     * 重做
     * @author songjianet
     * */
    revert() {
      this.init(defaultXML())
    },

    /**
     * 打开本地文件
     * @author songjianet
     * */
    openLocalFile(xml) {
      this.init(xml)
    },

    /**
     * 下一步
     * @author songjianet
     * */
    next() {
      const commandStack = this.modeler.get('commandStack')

      if (commandStack._stack.length - 1 === commandStack._stackIdx) {
        console.log('next') // TODO: 后续可以根据此处判断对按钮的显示隐藏
        return false
      }

      commandStack.redo()
    },

    /**
     * 上一步
     * @author songjianet
     * */
    previous() {
      const commandStack = this.modeler.get('commandStack')

      if (commandStack._stackIdx === -1) {
        console.log('prev') // TODO: 后续可以根据此处判断对按钮的显示隐藏
        return false
      }

      commandStack.undo()
    },

    /**
     * 放大
     * @author songjianet
     * */
    zoomIn() {
      let zoom = this.modeler.get('canvas').zoom()
      zoom += 0.1
      this.zoom = Number(zoom.toFixed(1))
      this.modeler.get('canvas').zoom(zoom)
    },

    /**
     * 缩小
     * @author songjianet
     * */
    zoomOut() {
      let zoom = this.modeler.get('canvas').zoom()
      zoom -= 0.1
      this.zoom = Number(zoom.toFixed(1))
      this.modeler.get('canvas').zoom(zoom)
    },

    /**
     * 通过输入框输入的值控制放大缩小
     * @author songjianet
     * */
    setZoom(val) {
      this.zoom = val / 100
      this.modeler.get('canvas').zoom(this.zoom)
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
@import "~diagram-js-minimap/assets/diagram-js-minimap.css";

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
