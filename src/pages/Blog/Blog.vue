<template>
  <div>
    <h1>Blog</h1>
    <div class="masonry">
        <div class="article"
        v-bind:key="article.title"
         v-for="article in articles">
            <h1> {{ article.title }}</h1>
        </div>
    </div>
  </div>
</template>

<script>
import Prismic from '@prismicio/client';

export default {
  data() {
    return {
      articles: [],
    };
  },
  methods: {
    getContent() {
      this.$prismic.client.query(
        Prismic.Predicates.at('document.type', 'test'),
      ).then((document) => {
        this.articles = document.results.map(item => item.data);
        debugger;
      });
    },
  },

  created() {
    this.getContent();
  },
};
</script>

<style lang="scss">
.masonry {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(250px,1fr));
    grid-auto-rows: 20px;
}
</style>
