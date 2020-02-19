<template>
  <empty>
    <div class="login-wrapper">
      <form class="login-form">
        <div class="login-form">
          <div class="login-form__item">
            <label for="login"></label>
            <input type="text" id="login">
          </div>
          <div class="login-form__item">
            <label for="password"></label>
            <input type="text" id="password">
          </div>
        </div>
      </form>
    </div>
  </empty>
</template>

<script>
import empty from '../layouts/Empty'

export default {
  components: {empty}
}
</script>

<style lang="postcss">
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-form {
  
}
</style>