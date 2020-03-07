<template>
  <!-- TODO: add an autoscroll -->
  <section class="chat">
    <div class="chat-overflow">
      <ul class="chat-message__list">
        <div class="chat-message__item" v-for="message in 5" :key="message">
          message
        </div>
      </ul>
      <form ref="form" @submit.prevent="sendData" class="chat__form chat-form">
        <input type="text" v-model="userText" class="g-input g-input--fluid" />
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
