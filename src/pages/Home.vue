<template>
  <div class="home">
    <content-list
      title="지금 뜨는 콘텐츠"
      :contents="[
        {
          id: 1,
          title: '콘텐츠1',
          thumbnail: 'https://picsum.photos/300/200?random=1'
        },
        {
          id: 2,
          title: '콘텐츠2',
          thumbnail: 'https://picsum.photos/300/200?random=2'
        },
        {
          id: 3,
          title: '콘텐츠3',
          thumbnail: 'https://picsum.photos/300/200?random=3'
        }
      ]"
    />
  </div>
</template>

<script>
import ContentList from '../components/ContentList.vue';

export default {
  name: 'home',
  components: { ContentList }
};
</script>
