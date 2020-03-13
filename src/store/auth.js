import axios from 'axios'
import setHeader from '../utils/interceptors'
import Cookie from 'cookie'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'

export default {
  state: {
    token: null,
    id: null,
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      Cookies.set('jwt-token', token)
    },
    setId(state, id) {
      state.id = id
    },
    clearToken(state) {
      state.token = false
    },
  },
  actions: {
    autoLogin({ dispatch }) {
      const cookieStr = process.browser ? document.cookie : this.app.context.req.headers.cookie

      const cookies = Cookie.parse(cookieStr || '') || {}
      const token = cookies['jwt-token']

      if (isJWTValid(token)) {
        dispatch('setToken', token)
      } else {
        dispatch('logout')
      }
    },
    logout({ commit, dispatch }) {
      dispatch('setToken', null)
      commit('clearToken')
      Cookies.remove('jwt-token')
    },
    setToken({ commit }, token) {
      setHeader(token)
      commit('setToken', token)
      Cookies.set('jwt-token', token)
    },
    async signIn({ commit, dispatch }, data) {
      const userData = await axios.post('/api/auth/sign_in', data)
      const { token, id } = userData.data
      dispatch('setToken', token)
      commit('setId', id)
    },
    // prettier-ignore
    async signUp({}, data) {  // eslint-disable-line  
    // prettier-enable
      await axios.post('/api/auth/sign_up', data)
    }
  },
  getters: {
    getToken: state => state.token,
    getId: state => state.id,
    isAuthenticated: state => !!state.token,
  },
}

function isJWTValid(token) {
  if (!token) {
    return false
  }

  const jwtData = jwtDecode(token) || {}
  const expires = jwtData.exp || 0

  return new Date().getTime() / 1000 < expires
}
