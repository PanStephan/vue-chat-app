<template>
  <div class="burger-container" @click="toggleBurger">
    <div :class="isOpen ? 'burger-icon open-burger' : 'burger-icon'"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggleBurger() {
      this.isOpen = !this.isOpen
      this.$emit('toggleBurger', this.isOpen)
    },
  },
}
</script>
<style lang="postcss">
.burger-container {
  height: 30px;
  width: 25px;
  position: relative;
}
.burger-container:hover {
  cursor: pointer;
}
.burger-icon {
  height: 3px;
  width: 25px;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50px;
  background-color: var(--border-color);
  transform: translate(-50%, -50%) rotate(0deg);
  transition: all ease var(--default-transition);
}
.burger-icon::before {
  content: '';
  position: absolute;
  height: inherit;
  border-radius: inherit;
  background-color: inherit;
  margin: auto;
  width: 50%;
  transition: all ease var(--default-transition);
}
.burger-icon::after {
  content: '';
  position: absolute;
  height: inherit;
  border-radius: inherit;
  background-color: inherit;
  margin: auto;
  width: 50%;
  transition: all ease var(--default-transition);
}
.burger-icon::before {
  top: -10px;
  left: 0;
  transform-origin: left;
}
.burger-icon::after {
  bottom: -10px;
  right: 0;
  transform-origin: right;
}
.open-burger {
  transform: translate(-50%, -50%) rotate(135deg);
}
.open-burger::before {
  top: 0;
  transform: translateX(100%) rotate(-90deg);
}
.open-burger::after {
  bottom: 0;
  transform: translateX(-100%) rotate(-90deg);
}
</style>
