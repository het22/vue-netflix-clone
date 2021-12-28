<template>
  <section>
    <h2>{{ title }}</h2>
    <ul>
      <li v-for="content in contents" :key="content.id">{{ content.title }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'content-list',
  props: ['title', 'contents']
};
</script>
