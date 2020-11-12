const customElements = [
  'bpmn:StartEvent',
  'bpmn:ServiceTask',
  'bpmn:UserTask',
  'bpmn:EndEvent',
  'bpmn:IntermediateCatchEvent',
  'bpmn:IntermediateThrowEvent',
  'bpmn:BoundaryEvent',
  'bpmn:EventBasedGateway'
]

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
  },
  'bpmn:IntermediateCatchEvent': {
    'attr': { x: 0, y: 0, width: 48, height: 48 }
  },
  'bpmn:IntermediateThrowEvent': {
    'attr': { x: 0, y: 0, width: 48, height: 48 }
  },
  'bpmn:BoundaryEvent': {
    'attr': { x: 0, y: 0, width: 48, height: 48 }
  },
  'bpmn:EventBasedGateway': {
    'attr': { x: 0, y: 0, width: 48, height: 48 }
  }
}

const hasLabelElements = [
  'bpmn:StartEvent',
  'bpmn:ServiceTask',
  'bpmn:UserTask',
  'bpmn:EndEvent',
  'bpmn:IntermediateCatchEvent',
  'bpmn:IntermediateThrowEvent',
  'bpmn:BoundaryEvent',
  'bpmn:EventBasedGateway'
]

export { customElements, customConfig, hasLabelElements }
