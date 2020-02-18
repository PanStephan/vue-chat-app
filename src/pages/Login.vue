<template>
  <empty>
    <themeSwitcher/>
    <form class="login-">
      <input type="text">
    </form>
  </empty>
</template>

<script>
import empty from '../layouts/Empty'
import themeSwitcher from '../components/UI/ThemeSwitcher'

export default {
  components: {empty, themeSwitcher}
}
</script>

<style>

</style>