<template>
  <div class="configure_container" > 
    <el-button class="addBtn"  @click="addNewBranch"> +新增</el-button>
    <el-table
      :data="configureList"
      style="width: 90%"
      height="400"
      border>
      <el-table-column label="排序" fixed prop="date" width="80" />
      <el-table-column label="名称" prop="codingName" width="140" />
      <el-table-column label="实验项名称" prop="experimentName" width="160" />
      <el-table-column label="指标一" prop="target1" width="140" />
      <el-table-column label="指标二" prop="target2" width="140" />
      <el-table-column label="标准要求" prop="target2" width="140" />
      <el-table-column label="操作" align="standard" class-name="small-padding fixed-width"  fixed="right" width="240">
        <template slot-scope="scope">
          <el-button type="success" size="small" plain @click="editCoding(scope.row)">实验步骤</el-button>
          <el-button
            size="small"
            type="primary"
            plain
            @click="editConfigure(scope.row)"
          >修改</el-button>
          <el-button
            size="small"
            type="danger"
            plain
            @click="deleteConfigure(scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <AddOrEditConfigure  ref="AddOrEditConfigure"/>
  </div>
</template>

<script>
import AddOrEditConfigure from "../dialog/AddOrEditConfigure.vue"
export default {
  name: 'Configure',
  components: { AddOrEditConfigure },
  data() {
    return {
      configureList: [
        {
          date: 1,
          codingName: '干法机制砂',
          experimentName: '表观密度',
          target1: '烘干试验的质量',
          target2: "试验、水及容量瓶的总质量",
          standard: '>=0',
        },
      ]
    }
  },
  methods: {
    // 新增条
    addNewBranch() {
      this.$refs.AddOrEditConfigure.add()
    },
    editConfigure(row) {
      this.$refs.AddOrEditConfigure.edit(row)
    },
    // 删除
    deleteConfigure(row) {
      this.configureList.splice(row.date-1)
    },
    configure(row) {

    }
  }
}
</script>

<style lang="scss" scoped>
.configure_container {
  padding: 30px;
  .addBtn {
    margin-bottom: 15px;
  }
}
.myTable {
  border-collapse: collapse;
  border-style: solid;
  border-width: 1px;
  border-color: #e8e8e8;
  font-size: 14px;
  margin-top: 6px;

  .key {
    font-weight: 600;
    background-color: #f4f6fb;
    color: #333333;
    width: 120px;
  }
  .value {
    background-color: #fff;
    color: #666666;
    width: 239px;
  }
  tr {
    height: 57px;
    position: relative;
  }
  td {
    border:1px solid #EFEFEF;
  }
}
</style>