<template>
  <div class="error-message" :class="extraClass" v-if="isShowMsg">
    <img :src="img.src" v-if="img" :alt="img.alt" class="error-message__img">
    <span class="error-message__text">{{errorText}}</span>
  </div>
</template>

<script>
export default {
  props: {
    errorText: {
      required: true,
      type: String | null
    },
    img: {
      required: false,
      type: Object
    },
    extraClass: {
      required: false,
      type: 'string'
    }
  },
  data() {
    return {
      isShowMsg: false
    }
  },
  watch: {
    errorText: function(value) {
      if(value) {
        this.isShowMsg = true
        setTimeout(() => {
          this.isShowMsg = false
        }, 3000)
      }
    }
  }
}
</script>

<style lang="postcss">
.error-message {
  position: absolute;
  top: 25px;
  right: 50%;
  transform: translateX(50%);
  width: 65vw;
  height: 10vh;
  background-color: var(--input-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius);
}
.error-message__text {
  margin-left: 10px;
  color: var(--fz-color);
}
.error-message__img {
  margin-right: 10px;
  width: 30px;
  height: 30px;
}
</style>