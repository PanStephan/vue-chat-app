<template>
  <div class="error-message" v-if="isError">
    <img :src="img.src" :alt="img.alt" v-if="img" class="error-message__img">
    <span class="error-message__text">{{text}}</span>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      required: true,
      type: String
    },
    img: {
      required: false,
      type: Object
    },
    isError: {
      required: true,
      type: Boolean
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