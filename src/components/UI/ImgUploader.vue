<template>
  <div class="img-loader">
    <!-- TODO: acc,  style -->
    <input id="img-loader" type="file" class="img-loader__input" @change="uploadFile" />
    <label for="img-loader" class="g-input g-input--fluid img-loader__label img-loader-label">
      <span class="img-loader-label__text">Choose a file {{ fileName ? fileName : '' }}</span>
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: null,
      fileName: null,
    }
  },
  methods: {
    uploadFile(e) {
      const files = e.target.files || e.dataTransfer.files
      if (!files.length) return
      this.fileName = files[0].name
    },
  },
}
</script>

<style lang="postcss">
.img-loader__input {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}
.img-loader__label {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
