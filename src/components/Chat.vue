<template>
  <!-- TODO: add a autoscroll -->
  <section class="chat">
    <div class="chat-overflow">
      <ul class="chat-message__list">
        <div class="chat-message__item" v-for="message in 5" :key="message">
          message
        </div>
      </ul>
      <form @submit.prevent="sendData" class="chat__form chat-form">
        <input type="text" v-model="userText" class="g-input g-input--fluid" />
        <button type="submit" class="g-button g-form-button">Send</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      userText: null,
    }
  },
  methods: {
    sendData() {
      console.log(this.userText)
    },
  },
}
</script>

<style lang="postcss">
.chat {
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
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
