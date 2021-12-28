<template>
  <div>
    <el-row :gutter="10" class="result">
      <el-col :span="1.5" style="float: left;margin-left: 25px;font-size: 18px;color: #515a6e;">
        <span>查询结果</span><span style="margin-left: 10px;font-size: 15px;">(共{{total}}条)</span>
      </el-col>
      <el-col :span="1.5" style="float: right;margin-right: 10px;">
        <el-button type="warning" icon="el-icon-download"  @click="exportUsageRecord">导出</el-button>
      </el-col>
    </el-row>

    <el-table v-loading="loading" :data="tableList" style="width: 100%;" border  height="500">
      <el-table-column label="仪器编号" prop="equipmentCode" width="150" />
      <el-table-column label="仪器名称" prop="equipmentName" width="193" />
      <el-table-column label="仪器品牌" prop="equipmentBrand"  width="260"/>
      <el-table-column label="仪器使用状态" prop="equipmentStatus" width="160"/>
      <el-table-column label="仪器使用人" prop="verification" :show-overflow-tooltip="true" width="200" />
      <el-table-column label="仪器使用时间" prop="manufacture"  width="200"/>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'UsageRecordTable',
  props: {
    total: {
      type: Number,
    }
  },
  data() {
    return {
      loading: false,
      // 表格参数
      tableList: [
        {
          equipmentCode: 'FSY-150',
          equipmentName: '负压筛析仪',
          equipmentBrand: '无锡市建工仪器设备有限公司',
          equipmentStatus: '正常',
          verification: '2020-06-01',
          manufacture: '2021-01-31',
          warranty: '2021-01-31',
          desc:''
        }
      ],
    }
  },
  methods: {
    // 导出
    exportUsageRecord() {

    },
  }
}
</script>

<style lang="scss" scoped>
::v-deep .result {
  width: 100%;
  height: 60px;
  margin-left: 0 !important;
  line-height: 60px;
  background-color: #F0FAFF;
}
</style>