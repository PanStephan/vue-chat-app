import axios from 'axios'

export default {
  state: {
    token: null,
    id: null,
    profile: null,
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
        const token = await axios.post('/api/auth/sign_in', data)
        commit('setToken', token.data.token)
        commit('setId', token.data.id)
      } catch (e) {
        console.log(e)
      }
    },
    // dont wrap comment
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
  },
}
