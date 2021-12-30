<template>
  <div class="institution_container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" label-width="100px" @submit.native.prevent>
      <el-form-item prop="tenantName" label="机构名称">
        <el-input v-model="queryParams.tenantName" placeholder="请输入机构名称" clearable size="small"
          style="width: 160px" @clear="getInstitution" @keyup.enter.native="handleQuery"/>
      </el-form-item> 
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" round @click="handleQuery" size="small">筛选</el-button>
        <el-button type="success" icon="el-icon-plus" round @click="open = true" size="small">新增</el-button>
      </el-form-item>
    </el-form>

    <el-table
      v-loading="loading"
      :data="tableData"
      style="width: 75%;margin-bottom: 20px;margin-left: 30px;"
      border>
      <el-table-column prop="id" label="序号" width="100"></el-table-column>
      <el-table-column prop="tenantId" label="机构ID" width="150"></el-table-column>
      <el-table-column prop="tenantName" label="机构名称" width="320"></el-table-column>
      <el-table-column prop="tenantStr" label="机构简写" width="315"></el-table-column>
    </el-table>

    <el-dialog title="新增机构" :visible.sync="open" width="30%" append-to-body >
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="机构ID" prop="tenantId">
          <el-input v-model="form.tenantId" placeholder="请输入机构ID,为四个字符" />
        </el-form-item>
        <el-form-item label="机构名称" prop="tenantName">
          <el-input v-model="form.tenantName" placeholder="请输入机构名称" />
        </el-form-item>
        <el-form-item label="机构简写" prop="tenantStr">
          <el-input v-model="form.tenantStr" placeholder="请输入机构简写" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submit">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>

    <!-- 分页 -->
    <!-- <pagination 
      :total="total" 
      :page.sync="queryParams.page" 
      :limit.sync="queryParams.pageSize"
      @pagination="getInstitution" 
      style="margin-right: 250px;"/> -->
  </div>
</template>

<script>
import { institutionList, insertTenant } from '@/api/system/institution.js'

export default {
  name: 'Institution',
  data() {
    return {
      loading: false,
      queryParams: {
        tenantName: ''
      },
      tableData: [],
      open: false,
      form: {},
      rules: {
        tenantId: [
          { required: true, message: '请输入机构ID', trigger: 'blur' },
          { min: 4, max: 4, message: '长度在 4 个字符', trigger: 'blur' }
        ],
        tenantName: [
          { required: true, message: '请输入机构名称', trigger: 'blur' },
        ],
        tenantStr: [
          { required: true, message: '请输入机构简写', trigger: 'blur' },
        ],
      }
    }
  },
  mounted() {
    this.getInstitution()
  },
  methods: {
    getInstitution() {
      // const username = this.$store.state.user.name;
      // console.log(username);
      this.loading = true
      institutionList().then( res => {
        if(res.code == 200) {
          this.loading = false
          this.tableData = res.data
        }
      })
    },
    handleQuery() {
      this.loading = true
      institutionList({tenantName: this.queryParams.tenantName}).then( res => {
        if(res.code == 200) {
          this.loading = false
          this.tableData = res.data
        }
      })
    },
    // 新增弹框确认
    submit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          insertTenant(this.form).then( res => {
            console.log(res);
            if(res.code== 200) {
              this.getInstitution()
              this.open = false
            }
          })
        } else {
          return false;
        }
      });
    },
    cancel() {
      this.open = false
      this.$nextTick(() => {
        this.$refs.form.resetFields()
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.institution_container {
  padding: 20px;
}
</style>