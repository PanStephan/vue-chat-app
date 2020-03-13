import axios from 'axios'

export default {
  state: {
    profileData: null,
  },
  mutations: {
    setProfileData(state, data) {
      state.profileData = data
    },
  },
  actions: {
    // prettier-ignore
    async addConversation({}, { login, userId }) { // eslint-disable-line 
    // prettier-enable
      try {
        await axios.post(`/api/profile/new-conversation/`, { login, userId })
      } catch (e) {
        console.log(e)
      }
    },
    async fetchProfileData({ commit }, userId) {
      const { data = {} } = await axios.get(`/api/profile/info/${userId}`)
      commit('setProfileData', data)
    },
  },
  getters: {
    getProfileData: state => state.profileData
  },
}
