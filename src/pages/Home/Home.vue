<template>
  <div class="home">
    <home-header/>
    <div class="card-container">
      <div class="columns">
        <div v-for="card in cards"
        v-bind:key="card.cardName"
        :id="card.id"
        class="column home-card"
        v-observe-visibility="visibilityChanged">
           <transition :name="`home-card-${card.id}`">
             <home-card :card="card" v-if="visibleCards.indexOf(card.id) !== -1"></home-card>
           </transition>
        </div>
      </div>
    </div>
    <div class="square-container">
      <div v-bind:key="index" v-for="(row, index) in squares" class="square-row">
        <div class="columns is-mobile">
          <div v-for="item in row"
               v-bind:key="item.title"
               :id="item.id"
               v-observe-visibility="visibilityChanged"
               class="column is-3 social-card">
              <transition name="square-card">
                <square-card :item="item" v-if="visibleCards.indexOf(item.id) !== -1"/>
              </transition>
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
  visibleCards: string[] = [];

  cards: ICard[] = homeCards;

  squares: ISquareItem[][] = squareCards;

  visibilityChanged(isVisible: boolean, entry:any) {
    if (isVisible && this.visibleCards.indexOf(entry.target.className) === -1) {
      this.visibleCards.push(entry.target.id);
    }
  }
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

.home-card{
  min-height: 100px;
}

.social-card{
  min-height: 100px;
}

.home-card-experience-enter{
  opacity: 0;
  transform: translateX(-300px);
}

.home-card-skills-enter{
  opacity: 0;
  transform: translateY(30px);
}

.home-card-hobbies-enter{
  opacity: 0;
  transform: translateX(300px);
}

.square-card-enter{
  opacity: 0;
  transform: translateY(300px);
}

.home-card-experience-enter-active,
.home-card-skills-enter-active,
.home-card-hobbies-enter-active,
.square-card-enter-active{
  transition: all .8s ease;
  transition-delay: .1s;
}

</style>
