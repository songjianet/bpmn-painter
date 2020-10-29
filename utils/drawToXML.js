/**
 * 图转xml
 * @author songjianet
 * */

export const drawToXML = (xml) => {
  // xml = xml.replace(/&lt;/g, '<')
  // xml = xml.replace(/&gt;/g, '>')
  xml = xml.replace(/(\n)/g, '')
  xml = xml.replace(/(\t)/g, '')
  // xml = xml.replace(/(\r)/g, '')
  xml = xml.replace(/>\s*</g, '><')
  // xml = xml.replace(/ /ig, ' ')

  return xml
}
