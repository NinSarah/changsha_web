<template>
  <div class="CQMS_container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" label-width="80px">
      <el-form-item prop="where.abbreviate" label="任务名称">
        <el-input v-model="queryParams.where.abbreviate" placeholder="请输入任务名称" clearable size="small"
          style="width: 180px"  />
      </el-form-item> 
      <el-form-item prop="where.handleWay" label="处置方式">
        <el-select v-model="queryParams.where.handleWay" placeholder="请选择" style="width: 160px" clearable>
          <el-option
            v-for="item in handleWay"
            :key="item.dictCode"
            :label="item.dictLabel"
            :value="item.dictCode">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" round  @click="handleQuery" size="small">筛选</el-button>
      </el-form-item>
    </el-form>

    <Table ref="table"/>

    <pagination 
      :total="total" 
      :page.sync="queryParams.page" 
      :limit.sync="queryParams.pageSize"
      @pagination="getList" />
  </div>
</template>

<script>
import Table from "./table.vue"
export default {
  name: 'CQMS',
  components: { Table },
  data() {
    return {
      queryParams: {
        page: 1,
        pageSize: 10,
        where: {}
      },
      // 总条数
      total: 0,
    }
  },
  computed: {
    handleWay() {
      return this.$store.getters.handleWays
    },
  },
  mounted() {
    this.getList()
  },
  methods: {
    getList() {

    }
  }
}
</script>

<style lang="scss" scoped>
.CQMS_container {
  padding: 20px;
}
</style>