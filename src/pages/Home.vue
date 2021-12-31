<template>
  <div class="home">
    <content-list
      title="지금 뜨는 콘텐츠"
      :fetch="() => fetchMovies('now_playing')"
    />
  </div>
</template>

<script>
import ContentList from '../components/ContentList.vue';
import * as tmdb from '../utils/tmdb';

export default {
  name: 'home',
  components: { ContentList },
  methods: {
    fetchMovies: tmdb.movies,
    fetchTVs: tmdb.tvs
  }
};
</script>
