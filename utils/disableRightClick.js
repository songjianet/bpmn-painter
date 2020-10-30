/**
 * 屏蔽浏览器右键点击事件
 * @author songjianet
 * */
export const disableRightClick = () => {
  document.oncontextmenu = function(event) {
    if (window.event) {
      event = window.event
    }
    try {
      let the = event.srcElement
      if (!((the.tagName === 'INPUT' && the.type.toLowerCase() === 'text') || the.tagName === 'TEXTAREA')) {
        return false
      }
      return true
    } catch (e) {
      return false
    }
  }
}
