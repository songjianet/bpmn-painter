/**
 * 图转xml
 * @author songjianet
 * */

export default function drawToXML(xml) {
  xml = xml.replace(/&lt;/g, '<')
  xml = xml.replace(/&gt;/g, '>')

  return xml
}
