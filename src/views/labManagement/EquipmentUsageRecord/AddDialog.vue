<template>
  <el-dialog title="新增" :visible.sync="open" width="500px" append-to-body>
    <el-form ref="form" :model="form" :rules="rules" label-width="130px">
      <el-form-item label="仪器设备名称" prop="deviceStatus">
        <el-select v-model="form.deviceStatus" placeholder="请选择" clearable>
          <el-option
            v-for="item in equipmentList"
            :key="item.dictCode"
            :label="item.dictLabel"
            :value="item.dictCode">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="仪器设备使用状态" prop="deviceStatus">
        <el-select v-model="form.deviceStatus" placeholder="请选择" clearable>
          <el-option
            v-for="item in equipmentList"
            :key="item.dictCode"
            :label="item.dictLabel"
            :value="item.dictCode">
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="open = false">取 消</el-button>
      <el-button type="primary" @click="submitForm">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'AddDialog',
  data() {
    return {
      open: false,
      form: {},
      rules: {}
    }
  },
  computed: {
    // 获取设备状态
    equipmentList() {
      return this.$store.getters.equipmentStatus
    },
  },
  methods: {
    submitForm() {

    },
  }
}
</script>

<style>

</style>