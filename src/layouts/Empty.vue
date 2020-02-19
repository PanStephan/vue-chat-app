<template>
  <div class="g-container">
    <header class="empty-header">
      <h1 class="g-logo empty-logo g-h1">Chat-app</h1>
      <div class="empty-switcher empty-header__right">
        <themeSwitcher />
      </div>
    </header>
    <main>
      <slot />
    </main>
    <footer></footer>
  </div>
</template>

<script>
import themeSwitcher from '../components/UI/ThemeSwitcher'

export default {
  components: { themeSwitcher },
}
</script>

<style lang="postcss">
.empty-header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  margin-bottom: 70px;
}
.empty-switcher {
  margin-left: 40px;
}
</style>
