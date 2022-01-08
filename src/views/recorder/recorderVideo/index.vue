<template>
  <div class="recorder_video_container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" label-width="90px">
      <el-form-item prop="where.taskName" label="记录仪编号">
        <el-input v-model="queryParams.where.taskName" placeholder="请输入记录仪编号" clearable
          style="width: 160px" />
      </el-form-item>
      <el-form-item prop="where.taskName" label="状态">
        <el-select v-model="queryParams.where.recorderStatus" placeholder="请选择" clearable>
          <el-option
            v-for="item in recorderStatusOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item  prop="where.createTime" label="创建时间">
        <el-date-picker v-model="queryParams.where.startTime" value-format="yyyy-MM-dd HH:mm:ss" type="date"
          placeholder="开始时间" style="width: 130px" />
        <div style="
          font-size: 14px;
          color: #666;
          line-height: 40px;
          margin: -2px 6px;
          display: inline-block;
        ">
          至
        </div>
        <el-date-picker v-model="queryParams.where.endTime" value-format="yyyy-MM-dd HH:mm:ss" type="date"
          placeholder="结束时间" style="width: 150px" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" round @click="handleQuery" size="small">筛选</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="result">
      <el-col :span="1.5" style="float: left;font-size: 18px;color: #515a6e;">
        <span>查询结果</span><span style="margin-left: 10px;font-size: 15px;">(共{{total}}条)</span>
      </el-col>
      <el-col :span="1.5" style="float: right;">
        <el-button type="primary" icon="el-icon-plus"  @click="handleAdd" size="small">新增</el-button>
        <el-button type="danger" icon="el-icon-delete" :disabled="multiple" size="small" @click="deleteVideo">批量删除
        </el-button>
      </el-col>
    </el-row>

    <el-table v-loading="loading" :data="tableList" style="width: 100%;" border height="400" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="60" align="center" />
      <el-table-column label="记录仪编号" prop="equipmentCode" width="220" />
      <el-table-column label="音频大小" prop="equipmentName" width="220" />
      <el-table-column label="视频文件" prop="equipmentName" width="220" />
      <el-table-column label="状态" prop="equipmentBrand"  width="200"/>
      <el-table-column label="创建时间" prop="equipmentStatus" width="240"/>
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
        where: { }
      },
      recorderStatusOptions: [
        {
          value: '0',
          label: '正常'
        },
        {
          value: '1',
          label: '损坏'
        }
      ],
      // 总条数
      total: 0,
      loading: false,
      tableList: [],
      // 选中数组
      ids: [],
      // 非多个禁用
      multiple: true,
    }
  },
  mounted() {
    this.getDoneList()
  },
  methods: {
    getDoneList() {

    },
    handleSelectionChange(selection) {
      this.ids = selection.map(item => item.id);
      this.multiple = !selection.length
    },
    // 筛选
    handleQuery() {

    },
    // 批量删除
    deleteVideo() {
      const id = this.ids || [row.id]
      if(id) {
        this.$confirm('是否要删除该记录仪视频', '提示', {
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
    handleAdd() {

    },
  }
}
</script>

<style lang="scss" scoped>
.recorder_video_container {
  padding: 20px;
}
</style>