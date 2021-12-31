<template>
  <section class="content-list-wrapper">
    <h2 class="content-list-title">{{ title }}</h2>
    <ul class="content-list">
      <li class="content" v-for="content in contents" :key="content.id">
        <h3 class="content__title">{{ content.title }}</h3>
        <img
          class="content__thumbnail"
          :src="'https://image.tmdb.org/t/p/w500/' + content.backdrop_path"
          :alt="content.title"
        />
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'content-list',
  data() {
    return {
      contents: []
    };
  },
  props: ['title', 'fetch'],
  created() {
    this.fetch().then(({ results }) => {
      this.contents = results;
    });
  }
};
</script>

<style>
.content-list-wrapper {
}
.content-list-title {
  margin-left: 30px;
}
.content-list {
  display: flex;
  padding: 0 30px;
  overflow: scroll;
}
.content-list::-webkit-scrollbar {
  display: none;
}
.content {
  list-style: none;
}
.content + .content {
  margin-left: 6px;
}
.content__title {
  display: none;
}
.content__thumbnail {
  width: 260px;
  height: 150px;
  background-color: #222;
  border-radius: 6px;
}
</style>
