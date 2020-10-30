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
import 'bpmn-painter/dist/bpmn-painter.css'
import 'bpmn-painter/package/assets/scss/default.scss'

export default {
  components: { BpmnPainter }
}
</script>
```

### 内置`shape`

组件内默认提供五个`palette`的`shape`节点，可以通过一个数据对象进行配置。

```vue
<template>
  <bpmn-painter :data="data"></bpmn-painter>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          action: 'create.wechat-subscription-official-accounts',
          image: '图片路径',
          title: '订阅微信公众号',
          type: 'bpmn:StartEvent',
          group: 'event'
        },
        {
          action: 'create.automatically-reply-to-subscriber-messages',
          image: '图片路径',
          title: '自动回复订阅用户消息',
          type: 'bpmn:ServiceTask',
          group: 'activity'
        },
        {
          action: 'create.click-to-send-template-message',
          image: '图片路径',
          title: '点击链接回复模板消息',
          type: 'bpmn:ServiceTask',
          group: 'activity'
        },
        {
          action: 'create.click-the-greeting-link',
          image: '图片路径',
          title: '点击问候链接',
          type: 'bpmn:UserTask',
          group: 'activity'
        },
        {
          action: 'create.end-process',
          image: '图片路径',
          title: '结束流程',
          type: 'bpmn:EndEvent',
          group: 'event'
        }
      ]
    } 
  }
}
</script>
```

#### 配置信息

|字段|说明
|:----|:----|
|action|项目中用于关联`palette`、`render`和`properies`。|
|image|图片路径，可以使用网络资源和本地资源。用于在`palette`和`render`中显示时使用。|
|title|`palette`中`shape`组件的标题。|
|type|指定该`shape`节点组件的类型。类型为`bpmn`官方提供的类型。|
|group|分组，允许对`palette`中`shape`组件进行分组操作。|

### 保存获得`xml`和配置信息

```vue
<template>
  <bpmn-painter @save="save"></bpmn-painter>
</template>
<script>
export default {
  methods: {
    save(data) {
      console.log(data)
    }
  }
}
</script>
```

#### 返回数据信息

|字断|说明
|:----|:----|
|xml|绘制完成的`xml`。|
|params|返回所有节点的配置信息。|
