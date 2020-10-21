<template>
  <div>
    <h2>开始</h2>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
      <el-form-item label="名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="内容" prop="desc">
        <el-input v-model="ruleForm.desc"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Start',
  props: {
    element: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      ruleForm: {
        name: '',
        desc: ''
      },
      rules: {
        name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
        desc: [{ required: true, message: '请输入发送信息内容', trigger: 'blur' }]
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
