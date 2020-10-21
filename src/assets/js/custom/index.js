import CustomPalette from './palette'
import CustomRenderer from './render'

/**
 * 到处自定义的palette
 * @author songjianet
 * */
export default {
  __init__: ['paletteProvider', 'customRenderer'],
  paletteProvider: ['type', CustomPalette],
  customRenderer: ['type', CustomRenderer]
}
