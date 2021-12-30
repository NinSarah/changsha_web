<template>
  <div class="raw_table">
    <div class="panel">
      <h4 style="background-color: #FFF1DD;"><i class="el-icon-aim" style="color: #F9AC3A;margin-right: 5px;"></i>待执行  <span><i class="el-icon-folder"></i>{{total}}</span></h4>
      <div class="panel_card">
        <el-card shadow="hover">
          <div style="width: 3px;background-color: #F9AC3A;margin-right: 8px;"></div>
          <div style="flex: 1;padding: 8px 0;">
            <div>编号：<span>20213785</span></div>
            <div>名称：<span>检测混凝土</span></div>
            <div>创建时间：<span>2021-12-12</span></div>
            <div>派工时间：<span>2021-12-29 10:22</span></div>
          </div>
        </el-card>
      </div>
    </div>
    <div class="panel">
      <h4 style="background-color: #f0f9fa;"><i class="el-icon-video-play" style="color: #54B2BD;margin-right: 5px;"></i>执行中  <span><i class="el-icon-folder"></i>{{total}}</span></h4>
      <div class="panel_card">
        <el-card shadow="hover">
          <div style="width: 3px;background-color: #54B2BD;margin-right: 8px;"></div>
          <div style="flex: 1;padding: 8px 0;">
            <div>编号：<span>20213785</span></div>
            <div>名称：<span>检测混凝土</span></div>
            <div>创建时间：<span>2021-12-12</span></div>
            <div>派工时间：<span>2021-12-29 10:22</span></div>
            <div>当前节点：<span>物检收样检测</span></div>
            <div><span style="margin-right: 12px;">完成项数：5</span><span>未完成项数：3</span></div>
          </div>
        </el-card>
      </div>
    </div>
    <div class="panel">
      <h4 style="background-color: #FDEBDF;"><i class="el-icon-folder-checked" style="color: #F18741;margin-right: 5px;"></i>完成实验  <span><i class="el-icon-folder"></i>{{total}}</span></h4>
      <div class="panel_card">
        <el-card shadow="hover">
          <div style="width: 3px;background-color: #F18741;margin-right: 8px;"></div>
          <div style="flex: 1;padding: 8px 0;">
            <div>编号：<span>20213785</span></div>
            <div>名称：<span>检测混凝土</span></div>
            <div>创建时间：<span>2021-12-12</span></div>
            <div>派工时间：<span>2021-12-29 10:22</span></div>
            <div><span style="margin-right: 12px;">完成项数：5</span><span>未完成项数：3</span></div>
          </div>
        </el-card>
      </div>
    </div>
    <div class="panel">
      <h4 style="background-color: #FFF1EE;"><i class="el-icon-lock" style="color: #EE3000;margin-right: 5px;"></i>已完结  <span><i class="el-icon-folder"></i>{{total}}</span></h4>
      <div class="panel_card">
        <el-card shadow="hover">
          <div style="width: 3px;background-color: #EE3000;margin-right: 8px;"></div>
          <div style="flex: 1;padding: 8px 0;">
            <div>编号：<span>20213785</span></div>
            <div>名称：<span>检测混凝土</span></div>
            <div>创建时间：<span>2021-12-12</span></div>
            <div>派工时间：<span>2021-12-29 10:22</span></div>
            <div><span style="margin-right: 12px;">完成项数：5</span><span>未完成项数：3</span></div>
          </div>
        </el-card>
      </div>
    </div>
    <div class="panel">
      <h4 style="background-color: #fffae6;"><i class="el-icon-video-play" style="color: #DDB100;margin-right: 5px;"></i>已退货  <span><i class="el-icon-folder"></i>{{total}}</span></h4>
      <div class="panel_card">
        <el-card shadow="hover">
          <div style="width: 3px;background-color: #DDB100;margin-right: 8px;"></div>
          <div style="flex: 1;padding: 8px 0;">
            <div>编号：<span>20213785</span></div>
            <div>名称：<span>检测混凝土</span></div>
            <div>创建时间：<span>2021-12-12</span></div>
            <div>派工时间：<span>2021-12-29 10:22</span></div>
            <div><span style="margin-right: 12px;">完成项数：5</span><span>未完成项数：3</span></div>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RawTable',
  data() {
    return {
      total: 5
    }
  }
}
</script>

<style lang="scss" scoped>
.raw_table {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 500px;
  .panel {
    width: 300px;
    height: 100%;
    margin-right: 8px;
    border-radius: 8px;
    border: 1px solid #eee;
    overflow: hidden;
    h4 {
      width: 100%;
      height: 40px;
      line-height: 40px;
      margin: 0;
      padding: 0 10px;
      color: #515a6e;
      font-weight: 600;
      span {
        font-weight: 500;
        font-size: 14px;
        margin-left: 80px;
        .el-icon-folder {
          margin-right: 5px;
        }
      }
    }
    .panel_card {
      padding: 8px;
      width: 100%;
      height: 450px;
      overflow-y: scroll;
      &::-webkit-scrollbar{
        width: 6px;
        height: 6px;
      }
      &::-webkit-scrollbar-thumb{
        background: #bfbfbf;
        border-radius:10px;
      }
      ::v-deep .el-card {
        width: 100%;
        // height: 120px;
        margin-bottom: 8px;
      }
      ::v-deep .el-card__body {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        padding: 0px;
        line-height: 1.7;
        font-size: 13px;
        color: #5e6d82;
        span {
          font-size: 12px;
        }
      }
    }
  }
}
</style>