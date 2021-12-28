<template>
  <div class="usageRecord_container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" label-width="100px">
      <el-form-item prop="where.equipmentName" label="仪器名称">
        <el-input v-model="queryParams.where.equipmentName" placeholder="请输入仪器名称" clearable size="small"
          style="width: 160px"  />
      </el-form-item> 
      <el-form-item prop="where.equipmentUser" label="仪器使用人">
        <el-input v-model="queryParams.where.equipmentUser" placeholder="请输入仪器使用人" clearable size="small"
          style="width: 160px"  />
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
      <el-form-item  prop="where.createTime" label="仪器使用时间">
        <el-date-picker v-model="queryParams.where.startTime" value-format="yyyy-MM-dd HH:mm:ss" type="date"
          placeholder="执行时间" style="width: 200px" />
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
          placeholder="执行结束时间" style="width: 200px" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" round @click="handleQuery" size="small">筛选</el-button>
      </el-form-item>
    </el-form>

    <UsageRecordTable  ref="UsageRecordTable" :total="total"/>

    <!-- 分页 -->
    <pagination 
      :total="total" 
      :page.sync="queryParams.page" 
      :limit.sync="queryParams.pageSize"
      @pagination="getUsageRecord" />
  </div>
</template>

<script>
import UsageRecordTable from "./UsageRecordTable.vue"
export default {
  name: 'EquipmentUsageRecord',
  components: { UsageRecordTable },
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
    }
  },
  computed: {
    // 获取设备状态
    equipmentList() {
      return this.$store.getters.equipmentStatus
    },
  },
  mounted() {
    this.getUsageRecord()
  },
  methods: {
    getUsageRecord() {

    },
    // 筛选
    handleQuery() {

    }
  }
}
</script>

<style lang="scss" scoped>
.usageRecord_container {
  padding: 20px;
}
</style>