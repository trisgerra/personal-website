<template>
  <div class="home">
    <home-header/>
    <div class="card-container">
      <div class="columns">
        <div v-for="card in cards" v-bind:key="card.cardName" class="column home-card">
          <home-card :card="card"></home-card>
        </div>
      </div>
    </div>
    <div class="square-container">
      <div v-bind:key="index" v-for="(row, index) in squares" class="square-row">
        <div class="columns is-mobile">
          <div v-for="item in row" v-bind:key="item.title" class="column is-3">
            <square-card :item="item"></square-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HomeHeader from './HomeHeader/HomeHeader.vue';
import HomeCard from '../../components/HomeCard/HomeCard.vue';
import SquareCard from './SquareCard/SquareCard.vue';

import {
  homeCards, squareCards, ICard, ISquareItem,
} from './homeCardItems';

@Component({
  components: {
    HomeHeader,
    HomeCard,
    SquareCard,
  },
})
export default class Home extends Vue {
  cards: ICard[] = homeCards;

  squares: ISquareItem[][] = squareCards;
}
</script>

<style lang="scss" scoped>
.columns {
  margin: 0px;
  width: 100%;
}
.column {
  padding: 0px;
}
.card-container {
  border-top: 3px solid #ff0000;
  border-right: 3px solid #ff0000;
}
.square-container {
  border-right: 3px solid #ff0000;
}
</style>
