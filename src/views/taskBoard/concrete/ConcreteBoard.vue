<template>
  <div class="raw_material">
    <el-form :model="queryParams" ref="queryForm" :inline="true" label-width="80px">
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


    <!-- 分页 -->
    <pagination 
      :total="total" 
      :page.sync="queryParams.page" 
      :limit.sync="queryParams.pageSize"
      @pagination="getConcreteList" />
  </div>
</template>

<script>
export default {
  name: 'ConcreteBoard',
  data() {
    return {
      queryParams: {
        page: 1,
        pageSize: 10,
        where: {
        }
      },
      // 总条数
      total: 0,
    }
  },
  mounted() {
    this.getConcreteList()
  },
  methods: {
    getConcreteList() {

    }
  }
}
</script>

<style lang="scss" scoped>
.raw_material {
  padding: 20px;
}
</style>