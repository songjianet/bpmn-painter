## bpmn-painter

> 使用`bpmn.js`和`element-ui`实现工作流绘制器。

### 安装

#### 使用npm进行安装

```shell script
npm i bpmn-painter
```

#### 使用yarn进行安装

```shell script
yarn add bpmn-painter
```

### 快速上手

#### 全局引入

在`main.js`中引入：

```javascript
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import BpmnPainter from 'bpmn-painter'
import 'element-ui/lib/theme-chalk/index.css'
import 'bpmn-painter/dist/bpmn-painter.css' // 组件整体样式
import 'bpmn-painter/package/assets/scss/default.scss' // 在用户项目中覆盖组件内的样式

Vue.use(BpmnPainter)
Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
```

在组件中引入：

```vue
<template>
  <bpmn-painter></bpmn-painter>
</template>
<script>
import BpmnPainter from 'bpmn-painter'

export default {
  components: { BpmnPainter }
}
</script>
```
