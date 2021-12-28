<template>
  <div class="equipment_container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" label-width="68px">
      <el-form-item prop="where.equipmentName" label="仪器名称">
        <el-input v-model="queryParams.where.equipmentName" placeholder="请输入仪器名称" clearable size="small"
          style="width: 180px"  />
      </el-form-item> 
      <el-form-item prop="where.deviceStatus" label="仪器状态">
        <el-select v-model="queryParams.where.deviceStatus" placeholder="请选择" clearable>
          <el-option
            v-for="item in equipmentList"
            :key="item.dictCode"
            :label="item.dictLabel"
            :value="item.dictCode">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" round @click="handleQuery" size="small">筛选</el-button>
      </el-form-item>
    </el-form>

    <EquipmentTable ref="equipmentTable" :total="total"/>

    <!-- 分页 -->
    <pagination 
      :total="total" 
      :page.sync="queryParams.page" 
      :limit.sync="queryParams.pageSize"
      @pagination="getEquipmentList" />
  </div>
</template>

<script>
import EquipmentTable from "./EquipmentTable.vue"
export default {
  name: 'Equipment',
  components: { EquipmentTable },
  data() {
    return {
      // 查询参数
      queryParams: {
        page: 1,
        pageSize: 10,
        where: {
          equipmentName: '',
          deviceStatus: ''
        }
      },
      // 总条数
      total: 0,
      equipmentStatus: []
    }
  },
  computed: {
    // 获取设备状态
    equipmentList() {
      return this.$store.getters.equipmentStatus
    },
  },
  mounted() {
    this.getEquipmentList()
  },
  methods: {
    getEquipmentList() {

    },
    // 筛选
    handleQuery() {

    }
  }
}
</script>

<style lang="scss" scoped>
.equipment_container {
  padding: 20px;
}
</style>