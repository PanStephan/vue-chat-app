<template>
  <mainPage>
    <aside></aside>
    <section class="all-chats">
      <input type="text" class="all-chats__search" placeholder="Search..." />
      <ul class="all-chats__list">
        <li class="all-chats__item" v-for="chats in 5" :key="chats">
          <img src="" alt="" class="all-chats__img" />
          <p class="all-chats__last-message"></p>
          <div class="all-chats__info all-chats-info">
            <span class="all-chats-info__time"></span>
            <span class="all-chats-info__watched"></span>
          </div>
        </li>
      </ul>
    </section>
  </mainPage>
</template>

<script>
import mainPage from '../layouts/Main'
export default {
  components: { mainPage },
}
</script>

<style lang="postcss">
.all-chats__search {
  border: 0;
  background-color: transparent;
  border-bottom: 1px solid var(--border-color);
  width: 100%;
}
</style>
