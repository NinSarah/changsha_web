<template>
  <div>
    <el-row :gutter="10" class="result">
      <el-col :span="1.5" style="float: left;font-size: 18px;color: #515a6e;">
        <span>查询结果</span><span style="margin-left: 10px;font-size: 15px;">(共{{total}}条)</span>
      </el-col>
      <el-col :span="1.5" style="float: right;margin-right: 10px;">
        <el-button type="primary" icon="el-icon-plus"  @click="handleAdd" size="small">新增</el-button>
      </el-col>
    </el-row>

    <el-table v-loading="loading" :data="tableList" style="width: 100%;" border  height="400">
      <el-table-column label="项目编号" prop="equipmentCode" width="100" />
      <el-table-column label="订单编号" prop="equipmentName" width="100" />
      <el-table-column label="客户名称" prop="equipmentBrand"  width="150"/>
      <el-table-column label="混凝土型号" prop="equipmentStatus" width="100"/>
      <el-table-column label="方量" prop="verification" :show-overflow-tooltip="true" width="80" />
      <el-table-column label="塌落度" prop="manufacture"  width="80"/>
      <el-table-column label="流动性" prop=""  width="80"/>
      <el-table-column label="记录人" prop="equipmentStatus" width="100"/>
      <el-table-column label="记录时间" prop="verification" :show-overflow-tooltip="true" width="150" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width"  fixed="right" width="180">
        <template slot-scope="scope">
          <el-button type="success" icon="el-icon-edit"  size="small" plain @click="editService(scope.row)">编辑</el-button>
          <el-button
            size="small"
            type="danger"
            icon="el-icon-delete" 
            @click="deleteService(scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'ServiceTable',
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
    handleAdd() {
      this.$router.push('/recorder/fieldService/add')
    },
    editService(row) {
      this.$router.push('/recorder/fieldService/edit')
    },
    deleteService(row) {

    }
  }
}
</script>

