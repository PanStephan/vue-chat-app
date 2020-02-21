<template>
  <empty>
    <div class="form-wrapper">
      <form class="entrance-form" @submit.prevent="onLoginSubmit" v-show="isAcc">
        <div class="entrance-form__item">
          <div v-if="!$v.loginForm.login.email" class="entrance-form__error">
            Email is not correct!
          </div>
          <div v-else-if="loginForm.errors.login" class="entrance-form__error">
            Filed is required!
          </div>
          <label for="login" class="entrance-form__label">Login</label>
          <input
            id="login"
            v-model.trim="$v.loginForm.login.$model"
            class="g-input g-input--fluid"
            placeholder="type login"
          />
        </div>
        <div class="entrance-form__item">
          <div v-if="!$v.loginForm.password.minLength" class="entrance-form__error">
            Password must have at least {{ $v.loginForm.password.$params.minLength.min }} letters
          </div>
          <div v-else-if="loginForm.errors.password" class="entrance-form__error">
            Password is required
          </div>
          <label for="login-password" class="entrance-form__label">Password</label>
          <input
            id="login-password"
            v-model.trim="$v.loginForm.password.$model"
            type="password"
            class="g-input g-input--fluid"
            placeholder="type password"
          />
        </div>
        <button type="submit" class="g-button entrance-form__btn g-button--fluid">Submit</button>
        <span @click="isAcc = false" class="entrance-form__switch">Create Account</span>
      </form>
      <!-- sign up form -->
      <form v-show="!isAcc" class="entrance-form" @submit.prevent="onSignUp">
        <div class="entrance-form__item">
          <div class="entrance-form__error" v-if="!$v.signUpForm.email.email">
            Email is not correct!
          </div>
          <div class="entrance-form__error" v-else-if="signUpForm.errors.email">
            Filed is required!
          </div>
          <label for="email" class="entrance-form__label">Email</label>
          <input
            v-model="signUpForm.email"
            id="email"
            class="g-input g-input--fluid"
            placeholder="type email"
          />
        </div>
        <div class="entrance-form__item">
          <div class="entrance-form__error" v-if="!$v.signUpForm.password.minLength">
            Password must have at least {{ $v.signUpForm.password.$params.minLength.min }} letters.
          </div>
          <div class="entrance-form__error" v-else-if="signUpForm.errors.password">
            Password is required.
          </div>
          <label class="entrance-form__label" id="signUpForm-password">Password</label>
          <input
            class="g-input g-input--fluid"
            v-model.trim="$v.signUpForm.password.$model"
            placeholder="type password"
          />
        </div>
        <div class="entrance-form__item">
          <div class="entrance-form__error" v-if="!$v.signUpForm.repeatPassword.sameAsPassword">
            Passwords must be identical.
          </div>
          <label class="entrance-form__label">Repeat password</label>
          <input
            class="g-input g-input--fluid"
            v-model.trim="$v.signUpForm.repeatPassword.$model"
            placeholder="repeat password"
          />
        </div>
        <button type="submit" class="g-button entrance-form__btn g-button--fluid">Submit!</button>
        <span @click="isAcc = true" class="entrance-form__switch">Log in</span>
      </form>
    </div>
  </empty>
</template>

<script>
import empty from '../layouts/Empty'
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'

export default {
  components: { empty },
  data() {
    return {
      loginForm: {
        password: null,
        login: null,
        errors: {
          login: false,
          password: false,
        },
      },
      signUpForm: {
        email: null,
        password: null,
        repeatPassword: null,
        errors: {
          email: false,
          password: false,
        },
      },
      isAcc: true,
    }
  },
  validations: {
    loginForm: {
      login: {
        email,
        required,
      },
      password: {
        minLength: minLength(5),
        required,
      },
    },
    signUpForm: {
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(5),
      },
      repeatPassword: {
        sameAsPassword: sameAs('password'),
      },
    },
  },
  methods: {
    onLoginSubmit() {
      // always on top, vuelidate init
      this.$v.loginForm.$touch()

      this.loginForm.errors.login = this.$v.loginForm.login.$anyError
      this.loginForm.errors.password = this.$v.loginForm.password.$anyError

      // TODO: wait backend
      if (!this.$v.loginForm.$invalid) {
        setTimeout(() => {
          console.log(this.loginForm.password)
          console.log(this.loginForm.login)
          this.$v.loginForm.$reset()
          this.loginForm.login = null
          this.loginForm.password = null
        }, 1000)
      }
    },
    onSignUp() {
      // always on top, vuelidate init
      this.$v.signUpForm.$touch()

      this.signUpForm.errors.login = this.$v.signUpForm.login.$anyError
      this.signUpForm.errors.password = this.$v.signUpForm.password.$anyError
      // TODO: wait backend
      if (!this.$v.signUpForm.$invalid) {
        setTimeout(() => {
          console.log(this.signUpForm.password)
          console.log(this.signUpForm.email)
          this.$v.signUpForm.$reset()
          this.signUpForm.email = null
          this.signUpForm.password = null
          this.signUpForm.repeatPassword = null
        }, 1000)
      }
    },
  },
}
</script>

<style lang="postcss">
.form-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.entrance-form {
  padding: 20px;
  margin-top: 70px;
  width: 350px;
}
.entrance-form__item {
  margin-top: 15px;
  margin-bottom: 20px;
}
.entrance-form__label {
  display: inline-block;
  margin-left: 5px;
  margin-bottom: 10px;
  font-size: 15px;
  color: var(--font-color);
}
.entrance-form__error {
  margin-left: 5px;
  color: var(--font-color--warning);
  font-size: var(--fz-small);
}
.entrance-form__btn {
  margin-top: 25px;
  margin-bottom: 10px;
}
.entrance-form__switch {
  margin-top: 10px;
  font-size: 13px;
  color: var(--font-color);
  text-decoration: underline;
  cursor: pointer;
}
</style>
