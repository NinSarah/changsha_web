<template>
  <div class="detail_table">
    <!-- 任务信息标题 -->
    <el-row :gutter="10" class="result">
      <el-col :span="1.5" style="margin-left: 25px;font-size: 16px;color: #515a6e;">
        <span>任务信息</span>
      </el-col>
    </el-row>
    <!-- 任务信息 -->
    <div>
      <el-form ref="form" :model="form" label-width="100px">
        <el-row :gutter="5">
          <el-col :span="8">
            <el-form-item label="检测对象:">
              <span class="font">111</span>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="强度等级:">
              <span class="font">2222</span>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="项目:">
              <span class="font">2222</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="5">
          <el-col :span="8">
            <el-form-item label="施工部位:">
              <span class="font">111</span>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="车号:">
              <span class="font">2222</span>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="搅拌机序号:">
              <span class="font">2222</span>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="描述:">
              <span class="font">2222</span>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <!-- 质检员办理信息标题 -->
    <el-row :gutter="10" class="result">
      <el-col :span="1.5" style="margin-left: 25px;font-size: 16px;color: #515a6e;">
        <span>{{title2}}</span>
      </el-col>
    </el-row>
    <!-- 办理信息 -->
    <div>
      <el-form ref="form" :model="form" label-width="100px">
        <el-row :gutter="5">
          <el-col :span="8">
            <el-form-item label="是否送检:">
              <el-radio v-model="radio" label="1">是</el-radio>
              <el-radio v-model="radio" label="2">否</el-radio>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="派工时间:">
              <span class="font">2222</span>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="办理意见:">
              <span class="font">2222</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="5">
          <el-col :span="8">
            <el-form-item label="办理时间:">
              <span class="font">111</span>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="办理人:">
              <span class="font">2222</span>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OneStep',
  data() {
    return {
      form: {}, // 任务信息
      radio: '1'
    }
  }
}
</script>

<style>

</style>