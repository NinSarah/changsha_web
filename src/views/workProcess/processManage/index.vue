<template>
  <div class="process_manage">
    <el-form :model="queryParams" ref="queryForm" :inline="true" label-width="80px">
      <el-form-item prop="where.taskName" label="流程名称">
        <el-input v-model="queryParams.where.taskName" placeholder="请输入任务名称" clearable
          style="width: 160px" />
      </el-form-item> 
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" round @click="handleQuery" size="small">筛选</el-button>
        <el-button type="danger" icon="el-icon-delete" :disabled="multiple" @click="deleteProcess" round size="small">批量删除</el-button>
      </el-form-item>
    </el-form>

    <el-table v-loading="loading" :data="tableList" @selection-change="handleSelectionChange" style="width: 100%;" border height="430">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="流程编号" prop="processCode" width="120" />
      <el-table-column label="流程名称" prop="processName" width="180" />
      <el-table-column label="描述" prop="processDesc"  width="180"/>
      <el-table-column label="部署时间" prop="times" width="180"/>
      <el-table-column label="更新时间" prop="updateTime" width="180"/>
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width"  fixed="right" width="200">
        <template slot-scope="scope">
          <el-button type="success" size="small" plain @click="processConfig(scope.row)">流程配置</el-button>
          <el-button
            size="small"
            type="danger"
            @click="deleteProcess(scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <pagination 
      :total="total" 
      :page.sync="queryParams.page" 
      :limit.sync="queryParams.pageSize"
      @pagination="getProcessList" />
  </div>
</template>

<script>
export default {
  name: 'ProcessManage',
  data() {
    return {
      // 查询参数
      queryParams: {
        page: 1,
        pageSize: 10,
        where: {
        }
      },
      // 总条数
      total: 0,
      loading: false,
      tableList: [
        {
          processCode: '01',
          processName: '混凝土流程',
          processDesc: '混凝土流程',
          times: '2021-12-30',
          updateTime: '2021-12-30'
        }
      ],
      ids: [],
      multiple: true
    }
  },
  mounted() {
    this.getProcessList()
  },
  methods: {
    getProcessList() {

    },
    handleSelectionChange(selection) {
      this.ids = selection.map(item => item.id);
      this.multiple = !selection.length
    },
    // 搜索
    handleQuery() {

    },
    // 流程配置
    processConfig(row) {
      this.$router.push('/workProcess/processManage/processConfig')
    },
    // 删除
    deleteProcess(row) {
      const id = this.ids || [row.id]
      if(id) {
        this.$confirm('是否要删除该用例', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.loading = true;
          // 发删除请求
          // delInstance({ids: id}).then( res => {
          //   that.loading = false;
          //   if(res.code == 200) {
          //     that.$modal.msgSuccess("删除成功");
          //     // 删除后刷新页面
          //     that.getTestList();
          //   }
          // })
        }).catch((err) => {
          this.loading = false;
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.process_manage {
  padding: 20px;
}
</style>