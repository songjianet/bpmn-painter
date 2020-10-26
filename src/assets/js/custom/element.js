/**
 * 渲染节点组件配置
 * @author songjianet
 * */

// StartEvent开始、UserTask用户任务、Task任务、SequenceFlow流转线条、ExclusiveGateway排他网关、EndEvent结束
const customElements = ['bpmn:StartEvent', 'bpmn:ServiceTask']

const customConfig = {
  'bpmn:StartEvent': {
    // 'url': 'https://vvbin.cn/next/_assets/logo.0d0ebe72.png',
    'attr': { x: 0, y: 0, width: 48, height: 48 }
  },
  'bpmn:ServiceTask': {
    // 'url': 'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/rules.png',
    'attr': { x: 0, y: 0, width: 48, height: 48 }
  }
}

const hasLabelElements = ['bpmn:StartEvent', 'bpmn:Task']

export { customElements, customConfig, hasLabelElements }
