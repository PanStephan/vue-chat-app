import Vue from 'vue'
import VueRouter from 'vue-router'

// pages imports
import Entrance from '../pages/Entrance.vue'
import Profile from '../pages/Profile.vue'

Vue.use(VueRouter)

export default [
  {
    path: '/',
    component: Entrance,
    name: 'login',
  },
  {
    path: '/profile/:id',
    component: Profile,
    name: 'profile',
    // async beforeEnter(to, from, next) {
    //   // TODO: check token value

    //   try {
    //     const authData = store.getters.isAuth
    //     console.log(authData)
    //     if (hasPermission) {
    //       next({
    //         name: 'profile',
    //         query: { to: store.getters.getId },
    //       })
    //     }
    //   } catch (e) {
    //     next({
    //       name: 'login',
    //       query: { message: 'login_before' },
    //     })
    //   }
    // },
  },
]
