<template>
  <!-- TODO: add an autoscroll -->
  <section class="chat">
    <div class="chat-overflow">
      <ul class="chat-message__list">
        <div v-for="message in profileMessages" :key="message" class="chat-message__item">
          message
        </div>
        <div v-for="message in userMessages" :key="message" class="chat-message__item">
          message
        </div>
      </ul>
      <form ref="form" class="chat__form chat-form" @submit.prevent="sendData">
        <input v-model="userText" type="text" class="g-input g-input--fluid" />
        <button type="submit" class="g-button g-form-button" @click="addMessage">Send</button>
      </form>
    </div>
    <addConversation />
  </section>
</template>

<script>
// import autoscroll from '../utils/autoscroll'
import addConversation from './AddConversation'

export default {
  components: { addConversation },
  data() {
    return {
      userText: null,
    }
  },
  props: {
    profileMessages: {
      type: Array | null,
      required: true,
    },
    userMessages: {
      type: Array | null,
      required: true,
    },
  },
  // TODO: socket
  methods: {
    addMessage() {},
    sendData() {
      this.$socket.emit('userMessage', this.userText)
      this.userText = ''
    },
  },
}
</script>

<style lang="postcss">
.chat {
  display: flex;
  justify-content: space-between;
}
.chat__form {
  display: flex;
  justify-self: end;
}
.chat {
  height: 100%;
  background-color: var(--bg-color);
}
.chat-overflow {
  margin-top: 45px;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.chat-message__item {
  padding: 15px;
  background-color: var(--bg-color);
  color: var(--fz-color);
  border-radius: 15px;
  border: 2px solid var(--secondary-color);
  margin: 15px 0;
}
.chat-message__item:first-child {
  margin-top: 0;
}
.chat-message__item:last-child {
  margin-bottom: 0;
}
</style>
