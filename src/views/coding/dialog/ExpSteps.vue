<template>
  <el-dialog title="实验项" :visible.sync="outerVisible" width="75%">
    <div slot="title" style="display: flex;justify-content: space-between;align-items: center;">
      <span>实验项步骤</span>
      <el-button type="primary" size="small" style="margin-right: 50px;"  @click="addStep">新增</el-button>
    </div>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column prop="date" label="排序" width="60"></el-table-column>
      <el-table-column prop="name" label="名称" width="116"></el-table-column>
      <el-table-column prop="address" label="步骤名称" width="180"></el-table-column>
      <el-table-column prop="date" label="类型" width="80"></el-table-column>
      <el-table-column prop="name" label="数量" width="80"></el-table-column>
      <el-table-column prop="address" label="单位" width="80"></el-table-column>
      <el-table-column prop="date" label="计算公式" width="150"></el-table-column>
      <el-table-column prop="name" label="跳转到第几步" width="100"></el-table-column>
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width"  width="180">
        <template slot-scope="scope">
          <el-button type="success" size="small" plain @click="editStep(scope.row)">修改</el-button>
          <el-button
            size="small"
            type="danger"
            plain
            @click="deleteStep(scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      width="35%"
      title="实验步骤信息"
      :visible.sync="innerVisible"
      append-to-body>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
        <el-form-item label="步骤名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="类型" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="单位" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="计算公式" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="跳转到第几步" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="info" @click="innerVisible = false">取 消</el-button>
        <el-button type="primary" @click="innerVisible = false">提 交</el-button>
      </div>
    </el-dialog>
    <div slot="footer" class="dialog-footer">
      <el-button @click="outerVisible = false">取 消</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'ExpSteps',
  data() {
    return {
      outerVisible: false,
      innerVisible: false,
      tableData: [
        {
          date: '111',
          name: '3333333',
          address: '8585828252'
        }
      ],
      // 内部弹框数据
      ruleForm: {}
    };
  },
  methods: {
    addStep() {
      this.innerVisible = true
      this.ruleForm = {}
    },
    // 修改实验步骤
    editStep(row) {
      this.innerVisible = true
      this.ruleForm = row
    },
    // 删除实验步骤
    deleteStep(row) {

    }
  }
}
</script>

<style>

</style>