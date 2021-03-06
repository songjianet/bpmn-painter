// import BpmnPainter from './components/BpmnPainter'
//
// const components = [
//   BpmnPainter
// ]
//
// const install = Vue => {
//   if (install.installed) return
//   install.installed = true
//   components.map(component => {
//     Vue.component(component.name, component)
//   })
// }
//
// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue)
// }
//
// export default {
//   install,
//   ...components
// }
//
// export {
//   BpmnPainter
// }

import BpmnPainter from './components/BpmnPainter'

BpmnPainter.install = Vue => {
  Vue.component(BpmnPainter.name, BpmnPainter)
}

export default BpmnPainter

export {
  BpmnPainter
}
