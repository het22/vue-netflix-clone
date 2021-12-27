<template>
  <header>
    <router-link class="logo" to="/">
      <img src="@/assets/logo.png" alt="logo" />
    </router-link>
    <ul class="menus">
      <li
        v-for="menu in menus"
        :key="menu.path"
        class="menu"
        :class="activePath === menu.path && 'menu--active'"
      >
        <router-link :to="menu.path">{{ menu.title }}</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'app-header',
  data() {
    return {
      menus: [
        { path: '/', title: '홈' },
        { path: '/series', title: '시리즈' },
        { path: '/movies', title: '영화' },
        { path: '/latest', title: 'NEW! 요즘 대세 콘텐츠' },
        { path: '/my-list', title: '내가 찜한 콘텐츠' }
      ]
    };
  },
  computed: {
    activePath() {
      return this.$route.path;
    }
  }
};
</script>

<style>
header {
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  padding: 0 30px;
  height: 60px;
}

.logo {
  height: 36%;
  cursor: pointer;
}
.logo > img {
  height: 100%;
}

.menus {
  display: flex;
}

.menu {
  list-style: none;
  cursor: pointer;
}
.menu > a {
  font-size: 12px;
  color: #ccc;
  text-decoration: none;
}
.menu--active {
  pointer-events: none;
}
.menu--active > a {
  font-weight: bold;
  color: white;
}
.menu + .menu {
  margin-left: 18px;
}
</style>
