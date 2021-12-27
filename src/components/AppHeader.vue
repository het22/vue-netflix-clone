<template>
  <header>
    <img class="logo" src="@/assets/logo.png" alt="logo" />
    <ul class="menus">
      <li class="menu menu--active">홈</li>
      <li class="menu">시리즈</li>
      <li class="menu">영화</li>
      <li class="menu">NEW! 요즘 대세 콘텐츠</li>
      <li class="menu">내가 찜한 콘텐츠</li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'app-header'
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

.menus {
  display: flex;
}

.menu {
  list-style: none;
  font-size: 12px;
  color: #ccc;
  cursor: pointer;
}
.menu--active {
  font-weight: bold;
  color: white;
  pointer-events: none;
}
.menu + .menu {
  margin-left: 18px;
}
</style>
