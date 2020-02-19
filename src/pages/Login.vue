<template>
  <empty>
    <div class="login-wrapper">
      <form class="login-form" @submit.prevent="onSubmit">
        <div class="login-form__item">
          <div class="login-form__error" v-if="!$v.form.login.email"> Email is not correct!</div>
          <div class="login-form__error" v-else-if="form.errors"> Filed is required! </div>
          <label for="login" class="login-form__label">Login</label>
          <input
            id="login"          
            class="g-input g-input--fluid"
            placeholder="type login"
            v-model.trim="$v.form.login.$model"
          />
        </div>
        <div class="login-form__item">
          <div class="login-form__error" v-if="!$v.form.password.minLength">Password must have at least {{ $v.form.password.$params.minLength.min }} letters.</div>
          <div class="login-form__error" v-else-if="form.errors">Password is required.</div>
          <label for="password" class="login-form__label">Password</label>
          <input
            id="password"
            type="password"
            class="g-input g-input--fluid"
            placeholder="type password"
            v-model.trim="$v.form.password.$model"
          />
        </div>
        <button type="submit" class="g-button login-form__btn g-button--fluid">Submit</button>
      </form>
    </div>
  </empty>
</template>

<script>
import empty from '../layouts/Empty'
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
  components: { empty },
  data() {
    return {
      form: {
        password: '',
        login: '',
        errors: false,
      }
    }
  },
  validations: {
    form: {
      login: {
        email,
        required
      },
      password: {
        minLength: minLength(5),
        required
      }
    }
  },
  methods: {
    onSubmit() {
      // always on top, vuelidate init 
      this.$v.$touch()

      this.form.errors = this.$v.form.$anyError;
      // TODO: wait backend
      if (!this.$v.$invalid) {
        setTimeout(() => {
          console.log(this.form.password)
          console.log(this.form.login)
        }, 1000)
        this.form.login = null
        this.form.password = null
        this.$v.$reset()
      }
    },
  },
}
</script>

<style lang="postcss">
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-form {
  padding: 20px;
  margin-top: 70px;
  width: 350px;
}
.login-form__item {
  margin-top: 15px;
  margin-bottom: 20px;
}
.login-form__label {
  display: inline-block;
  margin-left: 5px;
  margin-bottom: 10px;
  font-size: 15px;
  color: var(--font-color);
}
.login-form__error {
  margin-left: 5px;
  color: var(--font-color--warning);
  font-size: var(--fz-small);
}
.login-form__btn {
  margin-top: 25px;
}
</style>
