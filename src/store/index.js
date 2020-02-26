import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth'
import profile from './profile'

Vue.use(Vuex)

// TODO: err boundary
export default new Vuex.Store({
  modules: { auth, profile },
})
