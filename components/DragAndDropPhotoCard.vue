<template>
  <div class="d-flex justify-center">
    <v-sheet color="indigo lighten-4" width="100%" height="150"
      class="rounded d-flex justify-center align-center dotted-border p-relative" @click="selectPhoto">
      <v-icon size="80" v-show="!showPreview">mdi-camera-plus-outline</v-icon>
    </v-sheet>
    <input type="file" multiple style="display:none;" id="uploadFile" @change="onFileChange" accept="image/*"/>
  </div>
</template>

<script>
  export default {
    name: 'DragAndDropPhotoCard',
    props: {
      value: Array
    },
    data() {
      return {
        showPreview: false
      }
    },
    mounted() {
    },
    methods: {
      selectPhoto(event) {
        uploadFile.click()
      },
      onFileChange(e) {
        var files = e.target.files || e.dataTransfer.files
        if (!files.length)
          return
        this.$emit('input', [...this.value,...files])
      },
      deleteImg() {
        this.$emit('input', {})
      }

    }
  }

</script>

<style scoped>
  .dotted-border {
    border: 1px solid;
    border-style: dotted;
  }

</style>
