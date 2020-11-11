<template>
  <div class="right-panel-components-container">
    <div class="title">{{element.title}}</div>
    <div class="components-form">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" inline class="demo-ruleForm">
        <el-form-item label="消息内容" prop="content">
          <el-input type="textarea" placeholder="请填写消息内容" v-model="ruleForm.content" style="width: 100%"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="mini" @click="submitForm('ruleForm')">保存配置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WechatCustomerMessage',
  props: ['element'],
  data() {
    return {
      ruleForm: {
        content: ''
      },
      rules: {
        content: [
          { required: true, message: '请填写消息内容', trigger: 'blur' }
        ]
      }
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    initData() {
      let params = JSON.parse(window.sessionStorage.getItem('params'))

      for (let i in params) {
        if (this.element.id === i) {
          this.ruleForm.content = params[i].customProperties.content
        }
      }
    },

    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let params = JSON.parse(window.sessionStorage.getItem('params'))

          params[String(this.element.id)] = {
            'nodeAttributes': {
              'flowable:class': 'wx.Reply'
            },
            'customProperties': {
              'content': this.ruleForm.content
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
    element: function () {
      this.initData()
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
