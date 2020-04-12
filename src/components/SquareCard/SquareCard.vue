<template>
  <div class="square-card" v-bind:style="{'background-color': item.color}">
      <a v-if="item.url" :href="item.url" target="_blank">
         <h3>{{item.title}}</h3>
      </a>
      <h3 v-else>{{item.title}}</h3>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class SquareCard extends Vue {
    @Prop() item: any;
}
</script>

<style lang="scss" scoped>

h3 {
    color: #B3B3B3;
    font-weight: 900;
    font-size: 39px;
    text-align: center;
    padding-top: 40%;
    padding-bottom: 40%;
    &:hover{
       color: white;
    }
}

</style>
