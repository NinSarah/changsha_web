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
      <el-row>
        <el-col :span="24">
          <el-form-item label="现场视频">
            <FileUpload />
          </el-form-item> 
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item prop="equipmentName" label="塌落度">
            <el-input v-model="formInfo.equipmentName" placeholder="请输入客户名称" clearable size="small"
              style="width: 160px"  />
          </el-form-item> 
        </el-col>
        <el-col :span="12">
          <el-form-item prop="equipmentName" label="流动性">
            <el-input v-model="formInfo.equipmentName" placeholder="请输入混凝土型号" clearable size="small"
              style="width: 160px"  />
          </el-form-item> 
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item prop="equipmentName" label="记录人">
            <el-input v-model="formInfo.equipmentName" placeholder="请输入客户名称" clearable size="small"
              style="width: 160px"  />
          </el-form-item> 
        </el-col>
        <el-col :span="12">
          <el-form-item prop="equipmentName" label="记录时间">
            <el-input v-model="formInfo.equipmentName" placeholder="请输入混凝土型号" clearable size="small"
              style="width: 160px"  />
          </el-form-item> 
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item prop="equipmentName" label="备注">
            <el-input v-model="formInfo.equipmentName" placeholder="请输入客户名称" clearable size="small"
              style="width: 160px"  />
          </el-form-item> 
        </el-col>
      </el-row>
    </el-form>

    <div class="bottom">
      <el-button style="margin-right: 20px" @click="cancel">取 消 </el-button>
      <el-button type="primary" @click="saveDetail">保 存</el-button>
    </div>
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
  },
  methods: {
    cancel() {

    },
    saveDetail() {

    }
  }
}
</script>

<style lang="scss" scoped>
.edit_or_add_service {
  padding: 20px 30px 100px 100px;
  .formtable {
    width: 600px;
    border-radius: 10px;
  }
  .bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 -8px 6px -1px #efefef;
    width: 100%;
    background-color: #fff;
    position: fixed;
    bottom: 5px;
    left: 0;
    height: 80px;
  }
}
</style>