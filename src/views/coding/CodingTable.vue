<template>
  <div>
    <el-row :gutter="10" class="result">
      <el-col :span="1.5" style="float: left;font-size: 18px;color: #515a6e;">
        <span>查询结果</span><span style="margin-left: 10px;font-size: 15px;">(共{{total}}条)</span>
      </el-col>
      <el-col :span="1.5" style="float: right;">
        <el-button type="primary" icon="el-icon-plus" size="small" @click="handleAdd">新增</el-button>
        <el-button type="danger" icon="el-icon-delete" :disabled="multiple" size="small" @click="deleteCoding">批量删除
        </el-button>
      </el-col>
    </el-row>

    <el-table v-loading="loading" :data="tableList"  @selection-change="handleSelectionChange" style="width: 100%;" border  height="500">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="简称" prop="abbreviate" width="80" />
      <el-table-column label="名称" prop="codingName" width="100" />
      <el-table-column label="类型" prop="type"  width="80"/>
      <el-table-column label="后几位数字" prop="num" width="100"/>
      <el-table-column label="几天后压力测试" prop="pressureTest" :show-overflow-tooltip="true" width="120" />
      <el-table-column label="检测规则" prop="rule"  width="100"/>
      <el-table-column label="是否每车必检" prop="Required" width="120"/>
      <el-table-column label="最新编码" prop="newCode"  width="120"/>
      <el-table-column label="创建时间" prop="time" width="120"/>
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width"  fixed="right" width="240">
        <template slot-scope="scope">
          <el-button type="success" size="small" plain @click="editCoding(scope.row)">修改</el-button>
          <el-button
            size="small"
            type="primary"
            plain
            @click="configure(scope.row)"
          >配置实验项</el-button>
          <el-button
            size="small"
            type="danger"
            plain
            @click="deleteCoding(scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <AddOrEditCoding  ref="AddOrEditCoding" />
  </div>
</template>

<script>
import AddOrEditCoding from "./dialog/AddOrEditCoding.vue"
export default {
  name: 'CodingTable',
  props: {
    total: {
      type: Number,
    }
  },
  components: { AddOrEditCoding },
  data() {
    return {
      loading: false,
      // 表格参数
      tableList: [
        {
          abbreviate: 'E',
          codingName: '混凝土',
          type: '混凝土',
          num: '4',
          pressureTest: '5',
          rule: '500',
          Required: '是',
          newCode: '458256',
          time:''
        }
      ],
      // 选中数组
      ids: [],
      // 非多个禁用
      multiple: true,
    }
  },
  methods: {
    handleSelectionChange(selection) {
      this.ids = selection.map(item => item.id);
      this.multiple = !selection.length
    },
    // 新增
    handleAdd() {
      this.$refs.AddOrEditCoding.add()
    },
    // 修改
    editCoding(row) {
      this.$refs.AddOrEditCoding.edit(row)
    },
    // 删除
    deleteCoding(row) {
      const id = this.ids || [row.id]
      if(id) {
        this.$confirm('是否要删除该用例', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.loading = true;
          // 发删除请求
          // delInstance({ids: id}).then( res => {
          //   that.loading = false;
          //   if(res.code == 200) {
          //     that.$modal.msgSuccess("删除成功");
          //     // 删除后刷新页面
          //     that.getTestList();
          //   }
          // })
        }).catch((err) => {
          this.loading = false;
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      }
    },
    // 配置实验项
    configure() {
      this.$router.push('/coding/configure')
    }
  }
}
</script>
