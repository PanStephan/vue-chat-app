<template>
  <empty>
    <div class="form-wrapper">
      <errorMessage :errorText="errorMsg" />
      <form v-show="isAcc" class="entrance-form" @submit.prevent="onLoginSubmit">
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
        <span class="entrance-form__switch" @click="isAcc = false">Create Account</span>
      </form>
      <!-- sign up form -->
      <form v-show="!isAcc" class="entrance-form" @submit.prevent="onSignUp">
        <div class="entrance-form__item">
          <div v-if="!$v.signUpForm.email.email" class="entrance-form__error">
            Email is not correct!
          </div>
          <div v-else-if="signUpForm.errors.email" class="entrance-form__error">
            Filed is required!
          </div>
          <label for="email" class="entrance-form__label">Email</label>
          <input
            id="email"
            v-model="signUpForm.email"
            class="g-input g-input--fluid"
            placeholder="type email"
          />
        </div>
        <div class="entrance-form__item">
          <div v-if="!$v.signUpForm.password.minLength" class="entrance-form__error">
            Password must have at least {{ $v.signUpForm.password.$params.minLength.min }} letters.
          </div>
          <div v-else-if="signUpForm.errors.password" class="entrance-form__error">
            Password is required.
          </div>
          <label id="signUpForm-password" class="entrance-form__label">Password</label>
          <input
            v-model.trim="$v.signUpForm.password.$model"
            type="password"
            class="g-input g-input--fluid"
            placeholder="type password"
          />
        </div>
        <div class="entrance-form__item">
          <div v-if="!$v.signUpForm.repeatPassword.sameAsPassword" class="entrance-form__error">
            Passwords must be identical.
          </div>
          <label class="entrance-form__label">Repeat password</label>
          <input
            v-model.trim="$v.signUpForm.repeatPassword.$model"
            type="password"
            class="g-input g-input--fluid"
            placeholder="repeat password"
          />
        </div>
        <button type="submit" class="g-button entrance-form__btn g-button--fluid">Submit!</button>
        <span class="entrance-form__switch" @click="isAcc = true">Log in</span>
      </form>
    </div>
  </empty>
</template>

<script>
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'

import empty from '../layouts/Empty'
import errorMessage from '../components/UI/ErrorMessage'
export default {
  components: { empty, errorMessage },
  data() {
    return {
      errorMsg: null,
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
    async onLoginSubmit() {
      // always on top, vuelidate init
      this.$v.loginForm.$touch()

      this.loginForm.errors.login = this.$v.loginForm.login.$anyError
      this.loginForm.errors.password = this.$v.loginForm.password.$anyError

      if (!this.$v.loginForm.$invalid) {
        const data = {
          login: this.loginForm.login,
          password: this.loginForm.password,
        }

        try {
          await this.$store.dispatch('signIn', data)

          this.$router.push(`/profile/${this.$store.getters.getId}`)
          this.$v.loginForm.$reset()
          this.loginForm.login = null
          this.loginForm.password = null
        } catch (e) {
          switch (e.response.status) {
            case 404: {
              this.errorMsg = 'user not found'
              break
            }
            case 401: {
              this.errorMsg = 'password isnt correct'
              break
            }
            default: {
              this.errorMsg = 'server error'
              break
            }
          }
        }
      }
    },
    async onSignUp() {
      // always on top, vuelidate init
      this.$v.signUpForm.$touch()

      this.signUpForm.errors.email = this.$v.signUpForm.email.$anyError
      this.signUpForm.errors.password = this.$v.signUpForm.password.$anyError
      if (!this.$v.signUpForm.$invalid) {
        const data = {
          login: this.signUpForm.email,
          password: this.signUpForm.password,
        }

        try {
          await this.$store.dispatch('signUp', data)
          this.$v.signUpForm.$reset()
          this.signUpForm.email = null
          this.signUpForm.password = null
          this.signUpForm.repeatPassword = null
          this.isAcc = true
        } catch (e) {
          switch (e.response.status) {
            case 409: {
              this.errorMsg = 'login is occupied'
              break
            }
          }
        }
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
