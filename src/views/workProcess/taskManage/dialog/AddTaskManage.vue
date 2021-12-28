<template>
  <el-dialog title="新增任务" :visible.sync="open" width="450px" append-to-body>
    <el-form ref="form" :model="formInfo" :rules="rules" label-width="100px">
      <el-form-item label="检测对象" prop="modalName">
        <el-select v-model="formInfo.type" placeholder="请选择检测对象" width="310px" clearable filterable>
          <el-option
            v-for="item in equipmentList"
            :key="item.dictCode"
            :label="item.dictLabel"
            :value="item.dictCode" />
        </el-select>
      </el-form-item>
      <el-form-item label="供应商" prop="modalName">
        <el-input v-model="formInfo.modalName"/>
      </el-form-item>
      <el-form-item label="车牌号" prop="modalFile">
        <el-input v-model="formInfo.modalName"  />
      </el-form-item>
      <el-form-item label="描述" prop="indicatorsDescribe">
        <el-input v-model="formInfo.modalName"  />
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="open = false">取 消</el-button>
      <el-button type="primary" @click="submitForm">提 交</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'AddTaskManage',
  data() {
    return {
      formInfo: {},
      rules: {},
      open: false,
      equipmentList: []
    }
  },
  methods: {
    submitForm() {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>