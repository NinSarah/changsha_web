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
  name: 'TaskManageTable',
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
    handleSelectionChange(selection) {
      this.ids = selection.map(item => item.id);
      this.multiple = !selection.length
    },
    // 新增
    handleAdd() {
      this.$refs.AddOrEditEquipment.add()
    },
    // 修改
    editEquipment(row) {
      this.$refs.AddOrEditEquipment.edit(row)
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