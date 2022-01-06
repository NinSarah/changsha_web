<template>
  <div class="done_container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" label-width="80px">
      <el-form-item prop="where.taskName" label="任务名称">
        <el-input v-model="queryParams.where.taskName" placeholder="请输入任务名称" clearable
          style="width: 160px" />
      </el-form-item> 
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" round @click="handleQuery" size="small">筛选</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="result">
      <el-col :span="1.5" style="float: left;margin-left: 25px;font-size: 18px;color: #515a6e;">
        <span>查询结果</span><span style="margin-left: 10px;font-size: 15px;">(共{{total}}条)</span>
      </el-col>
    </el-row>

    <el-table v-loading="loading" :data="tableList" style="width: 100%;" border  height="500">
      <el-table-column label="任务编号" prop="equipmentCode" width="120" />
      <el-table-column label="任务名称" prop="equipmentName" width="180" />
      <el-table-column label="任务状态" prop="equipmentName" width="180" />
      <el-table-column label="派工时间" prop="equipmentBrand"  width="180"/>
      <el-table-column label="创建时间" prop="equipmentStatus" width="180"/>
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width"  fixed="right" width="200">
        <template slot-scope="scope">
          <el-button type="primary" @click="check(scope.row)">查看</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <pagination 
      :total="total" 
      :page.sync="queryParams.page" 
      :limit.sync="queryParams.pageSize"
      @pagination="getDoneList" />
  </div>
</template>

<script>
export default {
  name: 'Done',
  data() {
    return {
      // 查询参数
      queryParams: {
        page: 1,
        pageSize: 10,
        where: {
          taskName: '',
        }
      },
      // 总条数
      total: 0,
      loading: false,
      tableList: []
    }
  },
  mounted() {
    this.getDoneList()
  },
  methods: {
    getDoneList() {

    },
    // 筛选
    handleQuery() {

    },
    // 查看
    check(row) {

    }
  }
}
</script>

<style lang="scss" scoped>
.done_container {
  padding: 20px;
}
</style>