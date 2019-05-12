<template>
  <el-upload class="upload-demo" drag action="/" :on-success="handleSuccess" :on-error="handleError"
    :show-file-list="false" :before-upload="beforeUpload">
    <i class="el-icon-upload"></i>
    <div class="el-upload__text">Drag files here or click <em>Upload</em></div>
    <div class="el-upload__tip" slot="tip">{{ tips }}</div>
  </el-upload>
</template>

<script>
document.title = 'upload';
export default {
    data() {
      return {
        loading: false,
        tips: 'Uploading images can only be in jpg/png format.'
      }
    },
    methods: {
      handleSuccess(response, file, fileList) {
        fetch(response).then(res =>
          res.blob().then(blob => {
            var a = document.createElement('a')
            var url = window.URL.createObjectURL(blob)
            var filename = file.name
            a.href = url
            a.download = filename
            a.click()
            window.URL.revokeObjectURL(url)
          }))
      },
      handleError(err, file, fileList) {
        this.loading = false
        this.tips = 'Upload failed...'
      },
      beforeUpload(file) {
        const isJPG = file.type === 'image/jpeg'
        const isPNG = file.type === 'image/png'
        const isSize = file.size / 1024 / 1024 < 20

        if (!isDocx && !isPNG ) {
          this.$message.error('The file you uploaded can only be in jpg/png format.')
        }
        if (!isSize) {
          this.$message.error('The file you uploaded cannot exceed 20MB.')
        }
        return isJPG || isPNG && isSize
      }
    }
}

</script>

<style>
  body {
    margin: 0;
  }
</style>
