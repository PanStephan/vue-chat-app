<template>
  <div class="g-container">
    <header class="main-header">
      <div class="main-header__left">
        <h1 class="g-logo g-h1">Chat-app</h1>
      </div>
      <div class="main-header__right">
        <settings class="main-header__settings" />
        <profile class="main-header__profile" />
        <div class="main-page__logout" @click="logout">Logout</div>
      </div>
    </header>
    <main>
      <slot />
    </main>
    <footer class="main-footer">
      <h3 class="main-footer__title g-h3">Chat-app</h3>
    </footer>
  </div>
</template>

<script>
import settings from '../components/Settings'
import profile from '../components/UI/Profile'

export default {
  components: { settings, profile },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/?message=logout')
    },
  },
}
</script>

<style lang="postcss">
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: var(--bg-color);
}
.main-header__right {
  display: flex;
}
.main-header__profile {
  margin-left: 15px;
}
.main-header__settings {
  margin-right: 15px;
}
.main-footer {
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 55px;
  left: 0;
  bottom: 0;
}
.main-footer__title {
  color: var(--fz-color);
}
</style>
