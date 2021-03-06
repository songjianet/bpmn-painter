import inherits from 'inherits'
import BaseRenderer from 'diagram-js/lib/draw/BaseRenderer'
import {append as svgAppend, create as svgCreate} from 'tiny-svg'
import {customConfig, customElements} from './config'
import { getControl } from '../bpmn-data'

/**
 * 定义自定义元素渲染器，用于在画布上对组件进行自定义
 * @author songjianet
 */
export default function CustomRenderer(eventBus) {
  BaseRenderer.call(this, eventBus, 2000)

  this.drawCustomElements = function(parentNode, element) {
    const type = element.type

    if (customElements.includes(type)) {
      const { attr } = customConfig[type]
      const config = getControl(element.action)
      const customIcon = svgCreate('image', {
        ...attr,
        href: config.image
      })

      element['width'] = attr.width
      element['height'] = attr.height
      element['title'] = config.title
      svgAppend(parentNode, customIcon)

      return customIcon
    }

    return this.bpmnRenderer.drawShape(parentNode, element)
  }
}

inherits(CustomRenderer, BaseRenderer)

CustomRenderer.$inject = ['eventBus', 'styles']

CustomRenderer.prototype.canRender = function(element) {
  return !element.labelTarget
}

CustomRenderer.prototype.drawShape = function(p, element) {
  return this.drawCustomElements(p, element)
}

CustomRenderer.prototype.getShapePath = function() {}
