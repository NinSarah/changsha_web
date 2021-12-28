<template>
  <div>
    <el-row :gutter="10" class="result">
      <el-col :span="1.5" style="float: left;margin-left: 25px;font-size: 18px;color: #515a6e;">
        <span>查询结果</span><span style="margin-left: 10px;font-size: 15px;">(共{{total}}条)</span>
      </el-col>
      <el-col :span="1.5" style="float: right;">
        <el-button type="primary" icon="el-icon-plus"  @click="handleAdd">新增</el-button>
        <el-button type="danger" icon="el-icon-delete" :disabled="multiple" @click="deleteEquipment">批量删除
        </el-button>
      </el-col>
    </el-row>

    <el-table v-loading="loading" :data="tableList" @selection-change="handleSelectionChange" style="width: 100%;" border  height="500">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="任务编号" prop="equipmentCode" width="110" />
      <el-table-column label="任务名称" prop="equipmentName" width="160" />
      <el-table-column label="项目" prop="equipmentBrand"  width="180"/>
      <el-table-column label="供应商" prop="equipmentStatus" width="90"/>
      <el-table-column label="施工部位" prop="verification" :show-overflow-tooltip="true" width="110" />
      <el-table-column label="强度等级" prop="manufacture"  width="110"/>
      <!-- <el-table-column label="车号" prop="equipmentStatus" width="90"/>
      <el-table-column label="搅拌机序号" prop="verification" :show-overflow-tooltip="true" width="110" />
      <el-table-column label="当前节点" prop="manufacture"  width="110"/>
      <el-table-column label="执行人" prop="equipmentStatus" width="110"/>
      <el-table-column label="派工时间" prop="verification" :show-overflow-tooltip="true" width="120" />
      <el-table-column label="任务状态" prop="manufacture"  width="100"/>
      <el-table-column label="完成项数" prop="equipmentStatus" width="90"/>
      <el-table-column label="未完成项数" prop="verification" :show-overflow-tooltip="true" width="90" />
      <el-table-column label="创建时间" prop="manufacture"  width="100"/> -->
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width"  fixed="right" width="300">
        <template slot-scope="scope">
          <el-button type="warning" size="small" @click="detail(scope.row)">详情</el-button>
          <el-button type="success" icon="el-icon-edit"  size="small" plain @click="editTaskManage(scope.row)">编辑</el-button>
          <el-button
            size="small"
            type="danger"
            icon="el-icon-delete" 
            @click="deleteEquipment(scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <Detail ref="Detail"/>

    <AddTaskManage  ref="AddTaskManage"/>
  </div>
</template>

<script>
import Detail from "./dialog/detail.vue"
import AddTaskManage from "./dialog/AddTaskManage.vue"
export default {
  name: 'TaskManageTable',
  components: { Detail, AddTaskManage },
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
          equipmentStatus: '鄂A15852',
          verification: '2020-06-01',
          manufacture: '2021-01-31',
          warranty: '2021-01-31',
          desc:''
        }
      ],
      ids: [],
      multiple: false
    }
  },
  methods: {
    handleSelectionChange(selection) {
      this.ids = selection.map(item => item.id);
      this.multiple = !selection.length
    },
    // 新增
    handleAdd() {
      this.$refs.AddTaskManage.open = true
    },
    // 编辑
    editTaskManage(row) {
      this.$router.push('/workProcess/taskManage/taskDetail')
    },
    // 详情
    detail(row) {
      this.$refs.Detail.formInfo = row
      this.$refs.Detail.open = true
    },
    // 删除
    deleteEquipment(row) {
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
::v-deep .result {
  width: 100%;
  height: 60px;
  margin-left: 0 !important;
  line-height: 60px;
  background-color: #F0FAFF;
}
</style>