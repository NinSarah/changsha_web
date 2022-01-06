<template>
  <div class="edit_or_add_service">
    <el-form class="formtable" :model="formInfo" ref="formInfo" :rules="rules" label-width="100px" >
      <el-row>
        <el-col :span="12">
          <el-form-item prop="equipmentName" label="项目编号">
            <el-input v-model="formInfo.equipmentName" placeholder="请输入项目编号" clearable size="small"
              style="width: 160px"  />
          </el-form-item> 
        </el-col>
        <el-col :span="12">
          <el-form-item prop="equipmentName" label="订单编号">
            <el-input v-model="formInfo.equipmentName" placeholder="请输入项目编号" clearable size="small"
              style="width: 160px"  />
          </el-form-item> 
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item prop="equipmentName" label="客户名称">
            <el-input v-model="formInfo.equipmentName" placeholder="请输入客户名称" clearable size="small"
              style="width: 160px"  />
          </el-form-item> 
        </el-col>
        <el-col :span="12">
          <el-form-item prop="equipmentName" label="混凝土型号">
            <el-input v-model="formInfo.equipmentName" placeholder="请输入混凝土型号" clearable size="small"
              style="width: 160px"  />
          </el-form-item> 
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item prop="equipmentName" label="方量">
            <el-input v-model="formInfo.equipmentName" placeholder="请输入方量" clearable size="small"
              style="width: 160px"  />
          </el-form-item> 
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="现场图片">
            <FileUpload />
          </el-form-item> 
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import FileUpload from "./FileUpload.vue"
export default {
  name: 'EditOrAddService',
  components: { FileUpload },
  data() {
    return {
      formInfo: {
        equipmentName: '',
      },
      rules: {
        equipmentName: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.edit_or_add_service {
  padding: 20px;
  .formtable {
    width: 600px;
    border-radius: 10px;
  }
}
</style>