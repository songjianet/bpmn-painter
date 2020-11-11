<template>
  <div class="right-panel-components-container">
    <div class="title">{{element.title}}</div>
    <div class="components-form">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" inline class="demo-ruleForm">
        <el-form-item label="消息模板" prop="template">
          <el-select size="mini" v-model="ruleForm.template" placeholder="请选择消息模板" @change="change">
            <el-option v-for="(item, index) in templateOptions" :key="index" :label="item.templateName" :value="item.templateId"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item
            v-for="(item, index) in ruleForm.templateProps"
            :key="item.key"
            :label="item.label"
            :prop="'templateProps.' + index + '.value'"
            :rules="{
              required: true, message: '请填写' + item.label, trigger: 'blur'
            }">
          <el-input size="mini" :placeholder="'请填写' + item.label" v-model="item.value"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" size="mini" @click="submitForm('ruleForm')">保存配置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { listWechatTemplateMessage } from '../../../api'

export default {
  name: 'WechatTemplateMessage',
  props: ['element'],
  data() {
    return {
      ruleForm: {
        template: '',
        templateProps: []
      },
      rules: {
        template: [
          { required: true, message: '请选择消息模板', trigger: 'change' }
        ]
      },
      templateOptions: [],
    }
  },
  async mounted() {
    await this.getWechatTemplateMessageList()
    await this.initData()
  },
  methods: {
    initData() {
      console.log(111)

      let params = JSON.parse(window.sessionStorage.getItem('params'))
      this.ruleForm.templateProps = []

      // 找到对应组件的ID
      for (let i in params) {
        if (this.element.id === i) {
          // 找到组件中的customProperties对象
          for (let j in params[i].customProperties) {
            if (j === 'templateId') {
              this.ruleForm.template = params[i].customProperties[j]
            } else {
              this.ruleForm.templateProps.push({ key: j, value: params[i].customProperties[j] })
            }

            this.templateOptions.forEach(item => {
              for (let l in item.fieldJson) {
                this.ruleForm.templateProps.forEach(rItem => {
                  if (rItem.key === l) {
                    rItem['label'] = item.fieldJson[l]
                  }
                })
              }
            })
          }
        }
      }
    },

    async getWechatTemplateMessageList() {
      await listWechatTemplateMessage().then(res => {
        this.templateOptions = res.data
      })
    },

    change(e) {
      this.ruleForm.templateProps = []

      this.templateOptions.forEach(item => {
        if (e === item.templateId) {
          for (let i in item.fieldJson) {
            this.ruleForm.templateProps.push({ label: item.fieldJson[i], key: i, value: '' })
          }
        }
      })
    },

    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let params = JSON.parse(window.sessionStorage.getItem('params'))
          let obj = {}

          this.ruleForm.templateProps.forEach(item => {
            obj[item.key] = item.value
          })

          params[String(this.element.id)] = {
            'nodeAttributes': {
              'flowable:class': 'wx.TemplateMes'
            },
            'customProperties': {
              'templateId': this.ruleForm.template,
              ...obj
            }
          }

          window.sessionStorage.setItem('params', JSON.stringify(params))

          this.$message.success(`对"${this.element.title}"组件的属性配置保存成功！`)
        } else {
          return false
        }
      })
    }
  },
  watch: {
    element: async function () {
      await this.getWechatTemplateMessageList()
      await this.initData()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "package/styles/right-panel-container";

.components-form {
  padding: 10px 15px;
  overflow: hidden;
}
</style>
