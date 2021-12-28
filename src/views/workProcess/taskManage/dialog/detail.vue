<template>
  <el-dialog title="详情" :visible.sync="open" width="700px" append-to-body>
    <el-form ref="form" :model="formInfo" label-width="100px">
      <el-row :gutter="5">
        <el-col :span="11">
          <el-form-item label="任务名称" prop="modalName">
            <el-input v-model="formInfo.modalName" />
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="车号" prop="modalName">
            <el-input v-model="formInfo.modalName" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="5">
        <el-col :span="11">
          <el-form-item label="搅拌机序号" prop="modalFile">
            <el-input v-model="formInfo.modalName"  />
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="当前节点" prop="indicatorsDescribe">
            <el-input v-model="formInfo.modalName"  />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="5">
        <el-col :span="11">
          <el-form-item label="执行人" prop="modalName">
            <el-input v-model="formInfo.modalName"  />
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="派工时间" prop="modalFile">
            <el-input v-model="formInfo.modalName"  />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="5">
        <el-col :span="11">
          <el-form-item label="任务状态" prop="indicatorsDescribe">
            <el-input v-model="formInfo.modalName"/>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="完成项数" prop="modalName">
            <el-input v-model="formInfo.modalName"  />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="5">
        <el-col :span="11">
          <el-form-item label="未完成项数" prop="modalFile">
            <el-input v-model="formInfo.modalName"  />
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="创建时间" prop="indicatorsDescribe">
            <el-input v-model="formInfo.modalName"  />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <!-- <div slot="footer" class="dialog-footer">
      <el-button @click="open = false">取 消</el-button>
    </div> -->
  </el-dialog>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      open: false,
      formInfo: {}
    }
  },
  methods: {
    submitForm() {

    },

  }
};
</script>

<style>
</style>