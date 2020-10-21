import CustomPalette from './paletteProvider'
import CustomContextPadProvider from './contextPadProvider'
import CustomRenderer from './render'

/**
 * 到处自定义的palette
 * @author songjianet
 * */
export default {
  __init__: ['paletteProvider', 'customRenderer', 'contextPadProvider'],
  paletteProvider: ['type', CustomPalette],
  customRenderer: ['type', CustomRenderer],
  contextPadProvider: ['type', CustomContextPadProvider]
}
