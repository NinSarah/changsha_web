<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default  {
  name:  'App',
  metaInfo() {
    return {
        title: this.$store.state.settings.dynamicTitle && this.$store.state.settings.title,
        titleTemplate: title => {
            return title ? `${title} - ${process.env.VUE_APP_TITLE}` : process.env.VUE_APP_TITLE
        }
    }
  }
}
</script>
<style lang="scss" scoped>
::v-deep .result {
  width: 100%;
  height: 55px;
  margin-left: 0 !important;
  padding: 0 25px;
  line-height: 55px;
  background-color: #F0FAFF;
}
</style>