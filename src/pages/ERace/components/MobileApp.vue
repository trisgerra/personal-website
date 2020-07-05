<template>
  <div class="app">
      <div id="race1" class="container-mobile columns">
        <a class="column is-6" target="_blank" href="https://www.facebook.com/asraces/videos/703386320433694/">
          <img src="../../../assets/mobile-store/iphones.png"/>
        </a>
        <div id="race2"  class="column is-6">
          <div class="column is-6 row google-play">
            <h1 class="title">
              ASRaces Mobile
            </h1>
            <h2 class="subtitle">
              Track your performance and improve your E-Driver skills
            </h2>
          </div>
          <div class="column is-6 row google-play">

          <a target="_blank" href="https://play.google.com/store/apps/details?id=com.tanteappios.timeonlap&gl=SK">
            <img src="../../../assets/mobile-store/googleplay.png" alt="Google play"/>
          </a>
          <a target="_blank" href="https://apps.apple.com/us/app/asraces/id1521736687?ign-mpt=uo%3D2">
            <img src="../../../assets/mobile-store/appstore.png" alt="Google play"/>
          </a>
            <button class="button terms-and-cond" @click="() => {
              this.$router.push({
              path: 'terms-and-condition'
              })
            }">Terms & Conditions</button>
          </div>
        </div>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

require('../../../assets/mobile-store/googleplay.png');
@Component
export default class Races extends Vue {

}
</script>

<style lang="scss">
.container-mobile {
  background:#fff;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 32px;
  margin-left: 0px;
}

.mobile{
  border-left: 3px solid #ff0000;
  border-bottom: 3px solid #ff0000;
}

.google-play {
  margin-top: 100px;
}

 .columns:last-child {
    margin-bottom: 0px;
  }


 .terms-and-cond {
   color: white;
   background-color: #FF5252;
 }
.is-mobile{
  background-color: #fff;
  h1 {
    color: #111;
  }
  h2 {
    color: #222;
  }
}
</style>
