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
      <b-p-m-n-left-panel :data="data" @currentShape="currentShape"></b-p-m-n-left-panel>
      <div class="canvas" ref="canvas"></div>
      <b-p-m-n-right-panel v-if="modeler" :element="element"></b-p-m-n-right-panel>
    </div>
  </div>
</template>

<script>
import BPMNHeader from './layouts/Header'
import BPMNRightPanel from './layouts/RightPanel'
import BPMNLeftPanel from './layouts/LeftPanel'
import { setControls, getControl, getControls } from '../lib/bpmn-data'
import defaultXML from '../lib/default-xml'
import CustomModeler from '../lib/custom-modeler'
import { downloadFile } from '../../utils/download'
import { drawToXML } from '../../utils/drawToXML'
import { disableRightClick } from '../../utils/disableRightClick'
import minimapModule from 'diagram-js-minimap'
import _ from 'lodash'

export default {
  name: 'bpmn-painter',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    requestUrl: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      modeler: null,
      xml: '',
      zoom: 1, // 缩放比例
      element: '', // render上点击节点后的dom
      shapeGroup: []
    }
  },
  async mounted() {
    window.sessionStorage.setItem('requestUrl', this.requestUrl)
    await setControls(this.data)
    this.shapeGroup = getControls()[0].shapeGroup
    window.sessionStorage.setItem('shape', JSON.stringify([]))
    await disableRightClick()
    await this.initModeler()
    await this.initMinimap()
    !this.xml ? await this.initDraw(defaultXML()) : await this.initDraw(this.xml)
  },
  methods: {
    /**
     * 装载modeler
     * @author songjianet
     * */
    initModeler() {
      this.modeler = new CustomModeler({
        container: this.$refs.canvas,
        additionalModules: [
          minimapModule
        ]
      })
    },

    /**
     * 装载canvas
     * @author songjianet
     * */
    async initDraw(xml, status = false) {
      xml = xml.replace(/<!\[CDATA\[(.+)]]>/g, '&lt;![CDATA[$1]]&gt;')

      try {
        await this.modeler.importXML(xml)
        await this.setPalette(status)
        await this.initEvent()
      } catch (err) {
        console.error('装载canvas出错：', err.message, err.warnings)
      }
    },

    /**
     * 装载并设置左侧工具栏面板
     * @author songjianet
     * */
    setPalette(val = false) {
      try {
        const canvas = this.$refs.canvas
        const djsPalette = canvas.children[0].children[1].children[5] // djsPalette是canvas节点下的一个类名

        if (val) {
          djsPalette.children[0].children[0].innerText = this.shapeGroup
        } else {
          djsPalette.innerHTML =
              `
              <div class="palette-container" style="width: 100%;">
                <div class="title" style="height: 40px;line-height: 40px;padding: 0 10px;border-bottom: 3px solid rgb(31, 41, 46);font-size: 12px;font-weight: 600;color: rgb(31, 41, 46);display: flex;justify-content: center;">
                  <span>${this.shapeGroup}</span>
                </div>
              </div>
            ` + djsPalette.innerHTML
        }

        const djsPaletteStyle = {
          width: '250px',
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

        const djsPaletteEntriesGroups = djsPalette.children[1].children

        for (let key in djsPaletteEntriesGroups) {
          const node = djsPaletteEntriesGroups[key]

          for (let nKey in node.children) {
            const control = node.children[nKey]

            const controlStyle = {
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              width: '100%',
              cursor: 'pointer',
              padding: '4px 10px'
            }

            if (
                control.className &&
                control.dataset &&
                control.className.indexOf('entry') !== -1
            ) {
              const controlProps = getControl(control.dataset.action)

              if (controlProps) {
                control.innerHTML =
                  `
                    <img style="width: 30px;height: 30px;" src="${controlProps['image']}">
                    <div style='font-size: 14px;font-weight:500;margin-left:15px;'>${controlProps['title']}</div>
                  `
              }

              controlStyle.display = this.shapeGroup !== controlProps.shapeGroup ? 'none' : 'flex'

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

        this.element = element
      })
      this.modeler.on('shape.added', e => {
        const { element } = e
        const { action, id, title } = element
        let shape = JSON.parse(window.sessionStorage.getItem('shape'))

        shape.push({ action, id, title })

        window.sessionStorage.setItem('shape', JSON.stringify(shape))

        this.element = element
      })
    },

    /**
     * 装载minimap
     * @author songjianet
     * */
    initMinimap() {
      this.modeler.get('minimap').open()

      const canvas = this.$refs.canvas
      const minimap = canvas.children[0].children[1].children[4]

      minimap.style['display'] = 'none'
    },

    /**
     * 打印xml
     * @author songjianet
     * */
    async canvasToXML() {
      try {
        let { xml } = await this.modeler.saveXML({ format: true })
        const params = JSON.parse(window.sessionStorage.getItem('params'))
        const shape = JSON.parse(window.sessionStorage.getItem('shape'))
        const shapeId = shape.map(item => item.id)
        let paramsId = []
        let diff = []
        let rulesErrorShapeTitle = ''

        for (let i in params) {
          paramsId.push(i)
        }

        diff = _.difference(shapeId, paramsId)

        shape.forEach(item => {
          if (diff.includes(item.id)) {
            if (
                (item.action !== 'create.begin') &&
                (item.action !== 'create.end') &&
                (item.action !== 'create.click-event')
            ) {
              rulesErrorShapeTitle = item.title
            }
          }
        })

        if (rulesErrorShapeTitle) {
          this.$message.error(`请填写"${rulesErrorShapeTitle}"节点的配置属性参数！`)
        } else {
          this.$emit('save', {
            xml: drawToXML(xml),
            params
          })
        }

        return drawToXML(xml)
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

        downloadFile(`${this.modeler.getDefinitions().rootElements[0].name}.bpmn20.xml`, drawToXML(xml), 'application/xml')

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

        downloadFile(this.modeler.getDefinitions().rootElements[0].name, svg, 'image/svg+xml')

        return svg
      } catch (err) {
        console.log(err)
      }
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
      this.initDraw(defaultXML(), true)
    },

    /**
     * 打开本地文件
     * @author songjianet
     * */
    openLocalFile(xml) {
      this.initDraw(xml)
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
    },

    /**
     * 点击左侧shape的分类按钮
     * @author songjianet
     * */
    currentShape(shapeGroup) {
      this.shapeGroup = shapeGroup
      this.setPalette(true)
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
