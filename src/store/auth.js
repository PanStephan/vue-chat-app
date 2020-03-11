import axios from 'axios'
import setHeader from '../utils/interceptors'

export default {
  state: {
    token: null,
    id: null,
  },
  mutations: {
    setToken(state, token) {
      state.token = token
    },
    setId(state, id) {
      state.id = id
    },
  },
  actions: {
    async signIn({ commit }, data) {
      try {
        const userData = await axios.post('/api/auth/sign_in', data)
        const { token, id } = userData.data
        commit('setToken', token)
        setHeader(token)
        commit('setId', id)
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
    isAuth(state) {
      return !!state.token
    },
  },
}
