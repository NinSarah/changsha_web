<template>
  <div>
    <el-row :gutter="10" class="result">
      <el-col :span="1.5" style="float: left;font-size: 18px;color: #515a6e;">
        <span>查询结果</span><span style="margin-left: 10px;font-size: 15px;">(共{{total}}条)</span>
      </el-col>
      <el-col :span="1.5" style="float: right;">
        <el-button type="primary" icon="el-icon-plus"  @click="handleAdd">新增</el-button>
        <el-button type="danger" icon="el-icon-delete" :disabled="multiple" @click="deleteEquipment">批量删除
        </el-button>
      </el-col>
    </el-row>

    <el-table v-loading="loading" :data="tableList"  @selection-change="handleSelectionChange" style="width: 100%;" border  height="500">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="仪器编号" prop="equipmentCode" width="90" />
      <el-table-column label="仪器名称" prop="equipmentName" width="120" />
      <el-table-column label="仪器品牌" prop="equipmentBrand"  width="150"/>
      <el-table-column label="仪器状态" prop="equipmentStatus" width="100"/>
      <el-table-column label="检定日期" prop="verification" :show-overflow-tooltip="true" width="120" />
      <el-table-column label="出厂日期" prop="manufacture"  width="100"/>
      <el-table-column label="质保日期" prop="warranty" width="120"/>
      <el-table-column label="描述" prop="desc"  width="120"/>
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width"  fixed="right" width="180">
        <template slot-scope="scope">
          <el-button type="success" icon="el-icon-edit"  size="small" plain @click="editEquipment(scope.row)">修改</el-button>
          <el-button
            size="small"
            type="danger"
            icon="el-icon-delete" 
            @click="deleteEquipment(scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <AddOrEditEquipment ref="AddOrEditEquipment"/>
  </div>
</template>

<script>
import AddOrEditEquipment from "./dialog/AddOrEditEquipment.vue"
export default {
  name: 'EquipmentTable',
  components: { AddOrEditEquipment },
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
      // 选中数组
      ids: [],
      // 非多个禁用
      multiple: true,
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

