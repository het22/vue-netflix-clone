<template>
  <div class="home">
    <content-list
      title="지금 뜨는 영화"
      :fetch="() => fetchMovies('now_playing')"
    />
    <content-list
      title="높은 평가를 받은 영화"
      :fetch="() => fetchMovies('top_rated')"
    />
    <content-list
      title="오늘 방영 예정"
      :fetch="() => fetchTVs('airing_today')"
    />
    <content-list title="인기 TV 프로그램" :fetch="() => fetchTVs('popular')" />
    <content-list
      title="평점이 높은 TV 프로그램"
      :fetch="() => fetchTVs('top_rated')"
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
