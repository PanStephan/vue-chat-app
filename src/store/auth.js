import axios from 'axios'
import setHeader from '../utils/interceptors'

export default {
  state: {
    token: null,
    id: null,
    isLogin: null,
  },
  mutations: {
    setToken(state, token) {
      state.token = token
    },
    setId(state, id) {
      state.id = id
    },
    setIsLogin(state, status) {
      if (status === 200) {
        state.isLogin = true
      } else state.isLogin = false
    },
  },
  actions: {
    removeIsLogin({ state }) {
      state.isLogin = null
    },
    async signIn({ commit }, data) {
      try {
        const userData = await axios.post('/api/auth/sign_in', data)
        const { token, id } = userData.data
        setHeader(token)
        commit('setToken', token)
        commit('setId', id)
        commit('setIsLogin', userData.status)
      } catch (e) {
        console.log(e)
      }
    },
    // prettier-ignore
    async signUp({}, data) {  // eslint-disable-line  
    // prettier-enable
      try {
        await axios.post('/api/auth/sign_up', data)
      } catch (e) {
        console.log(e)
      }
    }
  },
  getters: {
    getToken(state) {
      return state.token
    },
    getId(state) {
      return state.id
    },
    getIsLogin(state) {
      return state.isLogin
    },
    // isAuth(state) {
    //   return !!state.token
    // },
  },
}
