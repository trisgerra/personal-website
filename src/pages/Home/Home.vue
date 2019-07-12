<template>
  <div class="home">
    <head-hero></head-hero>
    <div class="card-container">
      <div class="columns">
        <div v-for="card in cards" v-bind:key="card.cardName" class="column home-card">
          <home-card :card="card"></home-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeadHero from './HeadHero/HeadHero.vue';
import HomeCard from './HomeCard/HomeCard.vue';
import { homeCards, ICard } from './homeCardItems';

@Component({
  components: {
    HeadHero,
    HomeCard,
  },
})
export default class Home extends Vue {
  cards: ICard[] = homeCards;
}
</script>

<style lang="scss" scoped>
.columns {
    margin: 0px;
    width: 100%;
}
.column {
    padding:0px;
}
.card-container {
  border-top: 3px solid #FF0000;
  border-right: 3px solid #FF0000;
}
</style>
