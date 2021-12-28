<template>
  <div class="taskManage_container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" label-width="100px">
      <el-form-item prop="where.taskName" label="任务名称">
        <el-input v-model="queryParams.where.taskName" placeholder="请输入任务名称" clearable size="small"
          style="width: 160px"  />
      </el-form-item> 
      <el-form-item prop="where.taskStatus" label="任务状态">
        <el-select v-model="queryParams.where.taskStatus" placeholder="请选择" clearable>
          <el-option
            v-for="item in taskStatus"
            :key="item.dictCode"
            :label="item.dictLabel"
            :value="item.dictCode">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="where.type" label="类型">
        <el-select v-model="queryParams.where.type" placeholder="请选择" clearable>
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item  prop="where.createTime" label="处置方式">
        <el-select v-model="queryParams.where.type" placeholder="请选择" clearable>
          <el-option
            v-for="item in handleWay"
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

    <TaskManageTable  ref="TaskManageTable" :total="total"/>

    <!-- 分页 -->
    <pagination 
      :total="total" 
      :page.sync="queryParams.page" 
      :limit.sync="queryParams.pageSize"
      @pagination="getUsageRecord" />
  </div>
</template>

<script>
import TaskManageTable from "./TaskManageTable.vue"
export default {
  name: 'TaskManage',
  components: { TaskManageTable },
  data() {
    return {
      // 查询参数
      queryParams: {
        page: 1,
        pageSize: 10,
        where: {
          taskName: '',
          taskStatus: ''
        }
      },
      // 总条数
      total: 0,
      options: [
        {
          value: '01',
          label: '原材料'
        },
        {
          value: '02',
          label: '混凝土'
        }
      ]
    }
  },
  computed: {
    taskStatus() {
      return this.$store.getters.taskStatus
    },
    // 获取设备状态
    equipmentList() {
      return this.$store.getters.equipmentStatus
    },
    handleWay() {
      return this.$store.getters.handleWays
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
.taskManage_container {
  padding: 20px;
}
</style>