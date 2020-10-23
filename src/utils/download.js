/**
 * 前端下载文件公共方法
 * @author songjianet
 * */

export default function downloadFile(filename, data, type) {
  const a = document.createElement('a')
  const url = window.URL.createObjectURL(new Blob([data], { type: type }))

  a.href = url
  a.download = filename
  a.click()

  window.URL.revokeObjectURL(url)
}
