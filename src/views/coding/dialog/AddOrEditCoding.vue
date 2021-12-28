<template>
  <el-dialog :title="title" :visible.sync="open" width="60%" append-to-body>
    <el-form ref="form" :model="formList" :rules="rules" label-width="120px">
      <el-row :gutter="5">
        <el-col :span="11">
          <el-form-item label="简称" prop="abbreviate">
            <el-input v-model="formList.abbreviate" placeholder="请输入简称" />
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="名称" prop="codingName">
            <el-input v-model="formList.codingName" placeholder="请输入名称" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="5">
        <el-col :span="11">
          <el-form-item label="后几位数字" prop="creator">
            <el-input v-model="formList.creator" placeholder="请输入后几位数字"/>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="类型" prop="type">
            <el-select v-model="formList.type" placeholder="请选择协议类型" clearable filterable width="250px">
              <el-option v-for="item in codingTypes" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="5">
        <el-col :span="11">
          <el-form-item label="几天后压力测试" prop="creator">
            <el-input v-model="formList.creator" />
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="是否每车必检" prop="creator">
            <el-radio v-model="radio" label="1">是</el-radio>
            <el-radio v-model="radio" label="2">否</el-radio>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="5">
        <el-col :span="11">
          <el-form-item label="检测规则" prop="protocolDescribe">
            <el-input v-model="formList.protocolDescribe" placeholder="请输入检测规则" width="200px"/>
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
  name: 'AddOrEditCoding',
  data() {
    return {
      open: false,
      title: '',
      // 表单参数
      formList: {
        abbreviate: ''
      },
      rules: {},
      codingTypes: [
        {
          value: '01',
          label: '原材料'
        },
        {
          value: '02',
          label: '混凝土'
        }
      ],
      radio: '1'
    }
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
      if(row.type=='混凝土') {
        this.formList.type='02'
      }else {
        this.formList.type='01'
      }
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

<style lang="scss" scoped>

</style>