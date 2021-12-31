<template>
  <div>
    <el-row :gutter="10" class="result">
      <el-col :span="1.5" style="float: left;font-size: 18px;color: #515a6e;">
        <span>查询结果</span><span style="margin-left: 10px;font-size: 15px;">(共{{total}}条)</span>
      </el-col>
      <el-col :span="1.5" style="float: right;">
        <el-button type="success" icon="el-icon-download"  @click="handleAdd">导出CQMS</el-button>
      </el-col>
    </el-row>

    <el-table v-loading="loading" :data="tableList"  @selection-change="handleSelectionChange" style="width: 100%;" border  height="500">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="任务编号" prop="abbreviate" width="80" />
      <el-table-column label="任务名称" prop="codingName" width="100" />
      <el-table-column label="当前节点" prop="type"  width="80"/>
      <el-table-column label="执行人" prop="num" width="100"/>
      <el-table-column label="派工时间" prop="pressureTest" :show-overflow-tooltip="true" width="120" />
      <el-table-column label="任务状态" prop="rule"  width="100"/>
      <el-table-column label="完成项数" prop="Required" width="120"/>
      <el-table-column label="未完成项数" prop="newCode"  width="120"/>
      <el-table-column label="创建时间" prop="time" width="120"/>
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width"  fixed="right" width="240">
        <template slot-scope="scope">
          <!-- <el-button
            size="small"
            type="danger"
            plain
            @click="deleteCoding(scope.row)"
          >删除</el-button> -->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    total: {
      type: Number,
    }
  },
  data() {
    return {
      loading: false,
      tableList: []
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .result {
  width: 100%;
  height: 60px;
  margin-left: 0 !important;
  padding: 0 25px;
  line-height: 60px;
  background-color: #F0FAFF;
}
</style>
