import { axios } from '../../utils/request'

const baseUrl = window.sessionStorage.getItem('requestUrl')

export function save(data) {
  return axios({
    url: `${baseUrl}/operating-center/campaigns/customFlow`,
    method: 'post',
    data
  })
}

export function listWechatTemplateMessage() {
  return axios({
    url: `${baseUrl}/operating-center/wxtemplates/allTemplates`,
    method: 'get',
  })
}
