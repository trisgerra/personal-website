<template>
  <div class="home">
    <head-hero></head-hero>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeadHero from './HeadHero/HeadHero.vue';

@Component({
  components: {
    HeadHero,
  },
})
export default class Home extends Vue {}
</script>
