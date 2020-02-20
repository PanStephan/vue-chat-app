<template>
  <div class="settings">
    <button class="settings__btn" @click="settingsModal = !settingsModal"></button>
    <modal title="Modal with form" v-show="settingsModal" @close="settingsModal = false">
      <!-- body -->
      <div slot="body">
        <themeSwitcher />
      </div>
    </modal>
  </div>
</template>

<script>
import themeSwitcher from './ThemeSwitcher'
import modal from './Modal'

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
  background-image: url('../../assets/images/settings.png');
  background-size: contain;
  width: 30px;
  height: 30px;
  border: none;
  background-color: transparent;
}
</style>
