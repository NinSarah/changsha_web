<template>
  <div class="task_detail">
    <el-steps :space="500" :active="1" finish-status="success" align-center="">
      <el-step title="步骤 1" description="任务基本信息">></el-step>
      <el-step title="步骤 2" description="配置任务检测信息"></el-step>
    </el-steps>

    <div style="margin-top: 10px; margin-left: 10px;">
      <OneStep ref="stepOneForm" v-show="active==1" :active.sync="active"/>
      <TwoStep ref="stepTwoForm" v-if="active==2" />
    </div>

    <div style="margin-left: 420px;margin-top: 10px;">
      <el-button style="margin-right: 20px" @click="cancel">取 消 </el-button>
      <el-button v-if="active==1" type="primary" style="margin-top: 12px;" @click="next">下一步</el-button>
      <el-button v-if="active==2" type="primary" @click="saveDetail">保 存</el-button>
    </div>
    
  </div>
</template>

<script>
import OneStep from "./OneStep.vue"
import TwoStep from "./TwoStep.vue"
export default {
  name: 'TaskDetail',
  components: { OneStep, TwoStep },
  data() {
    return {
      active: 1,
      title2: '质检员办理信息',
    }
  },
  methods: {
    next() {
      if (this.active++ > 2) this.active = 0;
    },
    cancel() {
      this.$router.push('/workProcess/taskManage')
    },
    // 完成实验
    complete() {

    },
    // 保存
    saveDetail() {

    }
  }
}
</script>

<style lang="scss" scoped>
.task_detail {
  padding: 30px 30px 30px 60px;
  .detail_table {
    width: 90%;
    border-radius: 10px;
    border: 1px solid #ccc;
    overflow: hidden;
  }
  ::v-deep .result {
    height: 50px;
    line-height: 50px;
    margin: 0 !important;
    background-color: #e4e4e4;
  }
  .font {
    color: #515a6e;
  }
  .bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 -8px 6px -1px #efefef;
    width: 100%;
    background-color: #fff;
    position: fixed;
    bottom: 5px;
    left: 0;
    height: 80px;
  }
}
</style>