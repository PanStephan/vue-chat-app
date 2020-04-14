<template>
  <mainPage>
    <div class="main-page__wrapper">
      <aside class="menu__left menu-left">
        <burgerMenu @toggleBurger="toggleAside" />
        <ul v-show="isAsideOpen">
          <li v-for="menu in 5" :key="menu" class="menu-left__item">
            <span class="menu-left__link">menu-item</span>
          </li>
        </ul>
      </aside>
      <section class="all-chats">
        <!-- TODO: delete it -->
        <div class="all-chats__loader">
          <loader v-if="pending" />
          <div v-else>{{ profile.login }}</div>
        </div>
        <input type="text" class="all-chats__search g-input--fluid" placeholder="Search..." />
        <ul class="all-chats__list">
          <li
            v-for="conversation in conversations"
            :key="conversation._id"
            :data-conversation-id="conversation._id"
            class="all-chats__item"
            @click="openChat"
          >
            <!-- TODO: img alt -->
            <div class="all-chats-body__close-btn" @click="removeConversation"></div>
            <img src="../assets/images/user.png" alt="" class="all-chats__img" />
            <div class="all-chats__body all-chats-body">
              <div class="all-chats-body__message">
                <div class="all-chats-body__name">
                  {{ conversation.login }}
                </div>
                <p class="all-chats-body__text">
                  message
                </p>
              </div>
              <div class="all-chats__info all-chats-info">
                <span class="all-chats-info__time">date</span>
                <span class="all-chats-info__watched">isRead</span>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <div class="menu__right">
        <chat :profileMessages="profileMessages" :userMessages="userMessages" />
      </div>
    </div>
  </mainPage>
</template>

<script>
import axios from 'axios'

import mainPage from '../layouts/Main'
import burgerMenu from '../components/UI/BurgerMenu'
import loader from '../components/UI/Loader'
import chat from '../components/Chat'
// TODO: profile erorr handler
export default {
  components: { mainPage, burgerMenu, loader, chat },
  data() {
    return {
      profile: null,
      conversations: null,
      pending: true,
      isAsideOpen: false,
      userMessages: null,
      profileMessages: null,
    }
  },
  async mounted() {
    this.pending = true
    try {
      await this.$store.dispatch('fetchProfileData', this.$route.params.id)
      this.pending = false
      const { profile, conversations } = this.$store.getters.getProfileData
      this.profile = profile
      this.conversations = conversations
    } catch (e) {
      console.log(e)
    }
  },
  methods: {
    toggleAside(isOpen) {
      this.isAsideOpen = isOpen
    },
    async openChat() {
      // TODO: move to store
      try {
        const userId = event.target.closest('.all-chats__item').getAttribute('data-conversation-id')
        await this.$store.dispatch('openChat', { profileId: this.$route.params.id, userId })

        const { profileMessages, userMessages } = this.$store.getters.getMessagesData

        this.profileMessages = profileMessages
        this.userMessages = userMessages

      } catch (e) {
        console.log(e)
      }
    },
    async removeConversation() {
      try {
        const userId = event.target.closest('.all-chats__item').getAttribute('data-conversation-id')

        await this.$store.dispatch('removeConversation', {
          login: userId,
          userId: this.$route.params.id,
        })

        const { profile, conversations } = this.$store.getters.getProfileData
        this.profile = profile
        this.conversations = conversations

      } catch (e) {
        if (e.response.status === 404) return console.log('404')
        console.log('500')
      }
    },
  }
  // sockets: {
  //   connect() {},
  // },
}
</script>

<style lang="postcss">
.all-chats {
  margin-right: 30px;
  margin-left: 20px;
}
.main-page__wrapper {
  display: flex;
}
.all-chats__search {
  border: 0;
  background-color: transparent;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 15px;
}
.all-chats__list {
  margin-top: 15px;
}
.all-chats__img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px solid var(--border-color);
  margin-right: 15px;
  max-width: 100%;
}
.all-chats-body__text {
  margin: 5px 0 0 0;
  font-size: 13px;
  color: var(--font-color);
}
.all-chats-body__name {
  color: var(--font-color);
  width: 85px;
  /* TODO: watch a word-wrap opt */
  word-wrap: break-word;
  font-size: 15px;
  margin-bottom: 5px;
}
.all-chats-body {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.all-chats__item {
  background-color: var(--bg-message-color);
  border-radius: 10px;
  cursor: pointer;
  padding: 15px;
  height: 85px;
  margin: 15px 0;
  display: flex;
  align-items: center;
}
.all-chats-body__message {
  margin-left: 15px;
}
.all-chats-info {
  display: flex;
  flex-direction: column;
}
.all-chats-info__time {
  color: var(--font-color);
  margin-bottom: 5px;
}
.all-chats-info__watched {
  color: var(--font-color);
  margin-top: 5px;
}
.menu__right {
  margin-left: 25px;
}
.menu__left {
  margin-right: 20px;
}
.menu-left__list {
  margin-top: 50px;
}
.menu-left__item {
  height: 45px;
  width: 140px;
  color: var(--font-color);
  cursor: pointer;
  margin: 10px 0;
  border-left: 5px solid transparent;
  display: flex;
  align-items: center;
  transition: border var(--default-transition);
}
.menu-left__item:hover {
  border-left: 5px solid var(--border-color);
}
.menu-left__link {
  display: inline-block;
  margin-left: 10px;
  color: var(--fz-color);
}
.all-chats__loader {
  display: flex;
  justify-content: center;
}
.all-chats-body__close-btn {
  width: 7px;
  height: 7px;
  position: relative;
  opacity: 0;
  margin-right: 10px;
}
.all-chats__item:hover .all-chats-body__close-btn {
  opacity: 1;
  transition: var(--default-transition);
}
.all-chats-body__close-btn:before, .all-chats-body__close-btn:after {
  position: absolute;
  left: 5px;
  content: '';
  height: 10px;
  width: 1px;
  background-color: var(--border-color);
}
.all-chats-body__close-btn:before {
  transform: rotate(45deg);
}
.all-chats-body__close-btn:after {
  transform: rotate(-45deg);
}
</style>
