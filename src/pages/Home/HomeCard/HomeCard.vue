<template>
  <div :class="cardClass">
    <div class="card-content">
      <h3 class="card-title">{{card.name}}</h3>
      <p v-for="item in card.items"
      v-bind:key="item.text"
      class="item"
      v-bind:style="{'border-left': '3px solid ' + item.color}">{{item.text}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { ICard } from '../homeCardItems';
@Component({
  components: {},
})
export default class HomeCard extends Vue {
  @Prop() card!: ICard;

  get cardClass(): string {
    const { isDark } = this.card;
    return isDark ? 'card column dark' : 'card column';
  }
}

</script>

<style lang="scss" scoped>
.card {
  height: 100%;
  color: #151616;
}

.card-content {
  padding-top: 60px;
  padding-bottom: 60px;
  padding-left: 60px;
}

.dark {
  color: white;
  background-color: #151616;
}
h3 {
  margin-bottom: 16px;
  font-size: 32px;
  font-weight: bold;
}
p {
  margin: 0px 30px 8px 3px;
  padding: 0px 8px 0px 8px;
  border-left: 3px solid;
}
</style>
