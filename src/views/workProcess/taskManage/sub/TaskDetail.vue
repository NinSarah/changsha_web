<template>
  <div class="task_detail">
    <el-row :gutter="10" class="result">
      <el-col :span="1.5" style="margin-left: 25px;font-size: 18px;color: #515a6e;">
        <span>任务信息</span>
      </el-col>
    </el-row>

    <div>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="检测对象">
          <span>111</span>
        </el-form-item>
        <el-form-item label="强度等级">
          <span>2222</span>
        </el-form-item>
      </el-form>
    </div>

    <el-row :gutter="10" class="result">
      <el-col :span="1.5" style="margin-left: 25px;font-size: 18px;color: #515a6e;">
        <span>{{title2}}</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'TaskDetail',
  data() {
    return {
      title2: '质检员办理信息'
    }
  }
}
</script>

<style lang="scss" scoped>
.task_detail {
  padding: 20px;
  .result {
    width: 80%;
    height: 60px;
    line-height: 60px;
    background-color: #ccc;
  }
}
</style>