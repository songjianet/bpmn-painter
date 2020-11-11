import { axios } from '../../utils/request'

const baseUrl = 'http://192.168.1.107:7003'

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
