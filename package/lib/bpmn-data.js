/**
 * 存储左侧窗口流程设计相关数据
 * @author songjianet
 * */
let controls = []

/**
 * 装载数据
 * @author songjianet
 * */
export const setControls = (data) => {
  controls = data
}

/**
 * 获取控件配置信息
 * @author songjianet
 * */
export const getControl = (action) => {
  const result = controls.filter(item => item.action === action)
  return result[0] || {}
}

/**
 * 获取所有元素
 * @author songjianet
 * */
export const getControls = () => {
  return controls
}

/**
 * 循环创建出一系列的元素
 * @param {Object} fn 处理的函数
 */
export const batchCreateCustom = (fn) => {
  const customs = {}

  controls.forEach(item => {
    customs[item['action']] = fn(item.type, item.group, item.title, item.action)
  })

  return customs
}
