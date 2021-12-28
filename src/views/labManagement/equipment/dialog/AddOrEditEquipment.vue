<template>
  <el-dialog :title="title" :visible.sync="open" width="60%" append-to-body>
    <el-form ref="form" :model="formList" :rules="rules" label-width="120px">
      <el-row :gutter="5">
        <el-col :span="11">
          <el-form-item label="仪器编号" prop="equipmentCode">
            <el-input v-model="formList.equipmentCode" placeholder="请输入仪器编号" />
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="仪器名称" prop="equipmentName">
            <el-input v-model="formList.equipmentName" placeholder="请输入仪器名称" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="5">
        <el-col :span="11">
          <el-form-item label="仪器品牌" prop="equipmentBrand">
            <el-input v-model="formList.equipmentBrand" placeholder="请输入仪器品牌"/>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="仪器状态" prop="equipmentStatus">
            <el-select v-model="formList.type" placeholder="请选择协议类型" clearable filterable >
              <el-option
                v-for="item in equipmentList"
                :key="item.dictCode"
                :label="item.dictLabel"
                :value="item.dictCode" />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="5">
        <el-col :span="11">
          <el-form-item label="检定日期" prop="verification">
            <el-date-picker
              v-model="formList.verification"
              type="date"
              placeholder="选择检定日期">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="出厂日期" prop="manufacture">
            <el-date-picker
              v-model="formList.manufacture"
              type="date"
              placeholder="选择出厂日期">
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="5">
        <el-col :span="11">
          <el-form-item label="质保日期" prop="warranty">
            <el-date-picker
              v-model="formList.warranty"
              type="date"
              placeholder="选择质保日期">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="描述" prop="desc">
            <el-input v-model="formList.desc" placeholder="请输入描述"/>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="submitForm">确 定</el-button>
      <el-button @click="cancel">取 消</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'AddOrEditEquipment',
  data() {
    return {
      open: false,
      title: '',
      // 表单参数
      formList: {
        
      },
      rules: {},
      equipmentStatus: []
    }
  },
  computed: {
    // 获取设备状态
    equipmentList() {
      return this.$store.getters.equipmentStatus
    },
  },
  methods: {
    //新增协议
    add() {
      this.open = true;
      this.formList = {}
      this.title = "新增"
    },
    // 修改协议
    edit(row) {
      // 修改协议集时也需要重新上传插件
      this.open = true;
      this.formList = JSON.parse(JSON.stringify(row))
      console.log("当前选中的数据行", this.formList);
      this.title = "修改"
    },
    // 取消按钮
    cancel() {
      this.open = false
      this.$nextTick(() => {
        this.$refs.form.resetFields()
      })
    },
    submitForm() {

    }
  }
}
</script>

<style>

</style>