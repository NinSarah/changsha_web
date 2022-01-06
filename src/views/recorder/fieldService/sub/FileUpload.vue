<template>
  <div>
    <div
      class="upload-c"
      style="width:110px;text-align:center;background:#2d8cf0;color:#fff;height:69.6px;position:relative;border-radius:10px;"
    >
      <el-upload
        ref="upload"
        :headers="headers"
        :show-file-list="false"
        :format="fileType"
        :before-upload="handleBeforeUpload"
        :file-list="fileList"
        :limit="limit"
        :on-error="handleUploadError"
        :on-exceed="handleExceed"
        :on-success="handleUploadSuccess"
        type="drag"
        action="/xboot/upload/file"
      >
        <div
          class="upload-c"
          style="width:110px;text-align:center;background:#2d8cf0;color:#fff;cursor:pointer;"
        >选择本地照片</div>
      </el-upload>
      <div style="width:100%;cursor:pointer;"  @click="handleBeforeUpload(true)">记录仪照片</div>
    </div>

    <!-- 文件列表 -->
    <transition-group class="upload-file-list el-upload-list el-upload-list--text" name="el-fade-in-linear" tag="ul">
      <li :key="file.uid" class="el-upload-list__item ele-upload-list__item-content" v-for="(file, index) in fileList">
        <el-link :href="file.url" :underline="false" target="_blank">
          <span class="el-icon-document"> {{ getFileName(file.name) }} </span>
        </el-link>
        <div class="ele-upload-list__item-content-action">
          <el-link :underline="false" @click="handleDelete(index)" type="danger">删除</el-link>
        </div>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { getToken } from "@/utils/auth";
export default {
  name: 'FileUpload',
  data() {
    return {
      uploadFileUrl: process.env.VUE_APP_BASE_API + "/file/upload", // 上传的图片服务器地址
      headers: {
        Authorization: "Bearer " + getToken(),
      },
      fileList: [],
      // 数量限制
      limit: 5,
      // 大小限制(MB)
      fileSize: 5,
      fileType: ["doc", "xls", "ppt", "txt", "pdf"],
    }
  },
  methods: {
    // 上传前校检格式和大小
    handleBeforeUpload(file) {
      // 校检文件类型
      // if (this.fileType) {
      //   let fileExtension = "";
      //   if (file.name.lastIndexOf(".") > -1) {
      //     fileExtension = file.name.slice(file.name.lastIndexOf(".") + 1);
      //   }
      //   const isTypeOk = this.fileType.some((type) => {
      //     if (file.type.indexOf(type) > -1) return true;
      //     if (fileExtension && fileExtension.indexOf(type) > -1) return true;
      //     return false;
      //   });
      //   if (!isTypeOk) {
      //     this.$message.error(`文件格式不正确, 请上传${this.fileType.join("/")}格式文件!`);
      //     return false;
      //   }
      // }
      // 校检文件大小
      if (this.fileSize) {
        const isLt = file.size / 1024 / 1024 < this.fileSize;
        if (!isLt) {
          this.$message.error(`上传文件大小不能超过 ${this.fileSize} MB!`);
          return false;
        }
      }
      return true;
    },
    // 记录仪照片
    handleBeforeUpload(isIf) {

    },
    // 上传失败
    handleUploadError(err) {
      this.$message.error("上传失败, 请重试");
    },
    // 文件个数超出
    handleExceed() {
      this.$message.error(`上传文件数量不能超过 ${this.limit} 个!`);
    },
    // 上传成功回调
    handleUploadSuccess(res, file) {
      this.$message.success("上传成功");
      this.fileList.push({ name: res.data.url, url: res.data.url });
      // this.$emit("input", this.listToString(this.fileList));
    },
    // 删除文件
    handleDelete(index) {
      this.fileList.splice(index, 1);
      this.$emit("input", this.listToString(this.fileList));
    },
    // 获取文件名称
    getFileName(name) {
      if (name.lastIndexOf("/") > -1) {
        return name.slice(name.lastIndexOf("/") + 1).toLowerCase();
      } else {
        return "";
      }
    },
  }
}
</script>

<style>

</style>