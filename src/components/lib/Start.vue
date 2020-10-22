<template>
  <div class="right-panel-start-container">
    <div class="title">开始</div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="form">
      <el-form-item label="名称" prop="name">
        <el-input v-model="ruleForm.name" size="mini"></el-input>
      </el-form-item>
      <el-form-item label="内容" prop="desc">
        <el-input v-model="ruleForm.desc" size="mini"></el-input>
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
.right-panel-start-container {
  width: 100%;

  .title {
    height: 40px;
    line-height: 37px;
    padding: 0 10px;
    border-bottom: 3px solid rgb(31, 41, 46);
    font-size: 12px;
    font-weight: 600;
    min-width: 30px;
    color: rgb(31, 41, 46);
    display: flex;
    justify-content: center;
  }

  .form {
    padding: 0 10px;

    label {
      line-height: 20px;
    }
  }
}
</style>
