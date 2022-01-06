<template>
  <div class="field_service">
    <el-form :model="queryParams" ref="queryForm" :inline="true" label-width="100px">
      <el-form-item prop="where.equipmentName" label="项目编号">
        <el-input v-model="queryParams.where.equipmentName" placeholder="请输入项目编号" clearable size="small"
          style="width: 160px"  />
      </el-form-item> 
      <el-form-item prop="where.equipmentUser" label="客户名称">
        <el-input v-model="queryParams.where.equipmentUser" placeholder="请输入客户名称" clearable size="small"
          style="width: 160px"  />
      </el-form-item>
      <el-form-item  prop="where.createTime" label="创建时间">
        <el-date-picker v-model="queryParams.where.startTime" value-format="yyyy-MM-dd HH:mm:ss" type="date"
          placeholder="开始时间" style="width: 200px" />
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
          placeholder="结束时间" style="width: 200px" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" round @click="handleQuery" size="small">筛选</el-button>
      </el-form-item>
    </el-form>

    <ServiceTable :total="total"/>

    <!-- 分页 -->
    <pagination 
      :total="total" 
      :page.sync="queryParams.page" 
      :limit.sync="queryParams.pageSize"
      @pagination="getFieldServiceList" />
  </div>
</template>

<script>
import ServiceTable from "./ServiceTable.vue"
export default {
  name: 'FieldService',
  components: { ServiceTable },
  data() {
    return {
      // 查询参数
      queryParams: {
        page: 1,
        pageSize: 10,
        where: {}
      },
      // 总条数
      total: 0,
    }
  },
  mounted() {
    this.getFieldServiceList()
  },
  methods: {
    getFieldServiceList() {

    },
    handleQuery() {

    }
  }
}
</script>
<style lang="scss" scoped>
  .field_service {
    padding: 20px;
  }
</style>