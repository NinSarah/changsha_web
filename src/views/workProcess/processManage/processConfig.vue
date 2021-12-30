<template>
  <div>
    <Panel />
    <div class="bottom">
      <el-button style="margin-right: 20px" @click="cancel">取 消 </el-button>
      <el-button type="primary" @click="save">保 存</el-button>
    </div>
  </div>
</template>

<script>
import Panel from "./ef/panel.vue"
export default {
  name: 'processConfig',
  components: { Panel },
  methods: {
    cancel() {
      this.$router.push('/workProcess/processManage')
    },
    save() {

    }
  }
}
</script>

<style lang="scss" scoped>
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
</style>