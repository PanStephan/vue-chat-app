import axios from 'axios'

export default {
  state: {
    profileData: null,
    messages: {
      profileMessages: null,
      userMessages: null
    }
  },
  mutations: {
    setProfileData(state, data) {
      state.profileData = data
    },
    setMessagesData(state, { profile, user }) {
      state.messages.profileMessages = profile
      state.messages.userMessages = user
    },
    setConversations(state, data) {
      state.profileData.conversations = data
    }
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
    // prettier-ignore
    async removeConversation({ commit }, { login, userId }) { // eslint-disable-line 
    // prettier-enable
      try {
        const { data } = await axios.post(`/api/profile/remove-conversation/`, { login, userId })
        commit('setConversations', data.conversations)
      } catch (e) {
        console.log(e)
      }
    },
    async fetchProfileData({ commit }, userId) {
      const { data = {} } = await axios.get(`/api/profile/info/${userId}`)
      console.log(data)
      commit('setProfileData', data)
    },
    async openChat({ commit }, { profileId, userId }) {
      const res = await axios.post('/api/messages', { profileId, userId })
      const { profileMessages, userMessages } = res.data
      commit('setMessagesData', { profile: profileMessages, user: userMessages })
    }
  },
  getters: {
    getProfileData: state => state.profileData,
    getMessagesData: state => state.messages,
  },
}
