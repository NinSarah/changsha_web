<template>
  <div class="coding_container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" label-width="68px">
      <el-form-item prop="where.abbreviate" label="简称">
        <el-input v-model="queryParams.where.abbreviate" placeholder="请输入简称" clearable size="small"
          style="width: 180px"  />
      </el-form-item> 
      <el-form-item prop="where.codingName" label="编码名称">
        <el-input v-model="queryParams.where.codingName" placeholder="请输入编码名称" clearable size="small"
          style="width: 180px"  />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" round  @click="handleQuery" size="small">筛选</el-button>
      </el-form-item>
    </el-form>

    <CodingTable  ref="codingTable" :total="total"/>
    
    <pagination 
      :total="total" 
      :page.sync="queryParams.page" 
      :limit.sync="queryParams.pageSize"
      @pagination="getCodingList" />
  </div>
</template>

<script>
import CodingTable from "./CodingTable.vue"

export default {
  name: 'Coding',
  components: { CodingTable },
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
    this.getCodingList()
  },
  methods: {
    getCodingList() {

    },
    handleQuery() {

    }
  }
}
</script>

<style lang="scss" scoped>
.coding_container {
  padding: 20px;
}
</style>