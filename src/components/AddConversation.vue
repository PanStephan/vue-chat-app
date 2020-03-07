<template>
  <div class="conversation">
    <button class="conversation__btn" @click="conversationModal = !conversationModal">+</button>
    <modal v-show="conversationModal" title="type a mail" @close="conversationModal = false">
      <div slot="body">
        <form @submit.prevent="onSubmit">
          <input type="text" class="g-input g-input--fluid" v-model="inputData" />
          <button class="g-button">submit</button>
        </form>
      </div>
    </modal>
  </div>
</template>

<script>
import modal from './UI/Modal'
import axios from 'axios'

export default {
  components: { modal },
  data() {
    return {
      conversationModal: false,
      inputData: null,
    }
  },
  methods: {
    // TODO: create a error modal
    async onSubmit() {
      try {
        // TODO: move to store
        await axios.post(`/api/profile/new-conversation/`, { login: this.inputData })
        // TODO: create conversation
        console.log('success')
      } catch (e) {
        if (e.response.status === 404) return console.log('404')
        console.log('500')
      }
    },
  },
}
</script>

<style lang="postcss">
.conversation__btn {
  background-color: var(--input-bg);
  border-radius: 50%;
  width: 35px;
  height: 35px;
  color: var(--fz-color);
  font-size: 20px;
}
</style>
