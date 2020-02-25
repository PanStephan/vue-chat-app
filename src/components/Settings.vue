<template>
  <div class="settings">
    <button class="settings__btn" @click="settingsModal = !settingsModal"></button>
    <modal v-show="settingsModal" title="Modal with form" @close="settingsModal = false">
      <div slot="body">
        <themeSwitcher />
      </div>
    </modal>
  </div>
</template>

<script>
import themeSwitcher from './UI/ThemeSwitcher'
import modal from './UI/Modal'

export default {
  components: { themeSwitcher, modal },
  data() {
    return {
      settingsModal: false,
    }
  },
}
</script>

<style lang="postcss">
.settings__btn {
  display: inline-block;
  background-image: url('../assets/images/settings.png');
  background-size: contain;
  width: 30px;
  height: 30px;
  border: 0;
  background-color: transparent;
}
</style>
