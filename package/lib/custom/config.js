const customElements = ['bpmn:StartEvent', 'bpmn:ServiceTask', 'bpmn:UserTask', 'bpmn:EndEvent']

const customConfig = {
  'bpmn:StartEvent': {
    'attr': { x: 0, y: 0, width: 48, height: 48 }
  },
  'bpmn:ServiceTask': {
    'attr': { x: 0, y: 0, width: 48, height: 48 }
  },
  'bpmn:UserTask': {
    'attr': { x: 0, y: 0, width: 48, height: 48 }
  },
  'bpmn:EndEvent': {
    'attr': { x: 0, y: 0, width: 48, height: 48 }
  }
}

const hasLabelElements = ['bpmn:StartEvent', 'bpmn:ServiceTask', 'bpmn:UserTask', 'bpmn:EndEvent']

export { customElements, customConfig, hasLabelElements }
