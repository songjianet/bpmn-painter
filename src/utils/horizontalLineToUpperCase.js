/**
 * 全字母中横线分割的字符串转大驼峰 xxx-yyy -> XxxYyy
 * @param {String} str 传入的xxx-yyy型字符串
 * @author songjianet
 * */

export const horizontalLineToUpperCase = (str) => {
  let strArr = str.split('-')

  strArr = strArr.map(item => item.replace(/^\S/, s => s.toUpperCase()))

  return strArr.join('')
}
