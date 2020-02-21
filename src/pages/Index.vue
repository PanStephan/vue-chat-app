<template>
  <mainPage>
    <div class="main-page__wrapper">
      <aside class="menu">
        <ul class="menu__list" @click="openAside">
          <li class="menu__item" v-for="menu in 5" :key="menu">
            <a href="" class="menu__link">menu-item</a>
          </li>
        </ul>
      </aside>
      <section class="all-chats">
        <input type="text" class="all-chats__search g-input--fluid" placeholder="Search..." />
        <ul class="all-chats__list">
          <li class="all-chats__item" v-for="chats in 5" :key="chats">
            <!-- TODO: img alt -->
            <img src="../assets/images/settings.png" alt="" class="all-chats__img" />
            <div class="all-chats__body all-chats-body">
              <div class="all-chats-body__message">
                <div class="all-chats-body__name">
                  name
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
      <section class="chat">
        section
      </section>
    </div>
  </mainPage>
</template>

<script>
import mainPage from '../layouts/Main'
export default {
  components: { mainPage },
  methods: {
    openAside() {},
  },
}
</script>

<style lang="postcss">
.all-chats {
  margin-right: 25px;
  margin-left: 10px;
}
.main-page__wrapper {
  display: grid;
  grid-template-columns: 2fr 4fr 5fr;
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
.chat {
  margin-left: 25px;
}
.menu {
  margin-right: 10px;
}
.menu__list {
  margin-top: 50px;
}
.menu__item {
  height: 55px;
  color: var(--font-color);
  cursor: pointer;
  margin: 15px 0;
  border-left: 5px solid transparent;
  display: flex;
  align-items: center;
  transition: border var(--default-transition);
}
.menu__item:hover {
  border-left: 5px solid var(--border-color);
}
.menu__link {
  display: inline-block;
  margin-left: 10px;
}
</style>
