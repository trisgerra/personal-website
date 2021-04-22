<template>
  <div class="portfolio">
    <ASRaces class="asraces"/>
    <binance-bot class="binance-bot"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ASRaces from './components/ASRaces.vue';
import BinanceBot from './components/BinanceBot.vue';

@Component({
  components: {
    ASRaces,
    BinanceBot,
  },
})
export default class Portfolio extends Vue {

}
</script>

<style scoped>
.asraces {
    border-left: 3px solid #ff0000;
    border-bottom: 3px solid #ff0000;
}

.binance-bot {
    border-right: 3px solid #ff0000;
    border-bottom: 3px solid #ff0000;
}
</style>
