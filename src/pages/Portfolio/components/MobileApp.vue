<template>
  <div class="app">
    <section class="hero is-medium is-black">
      <div class="hero-body container columns">
        <a class="hero-col column is-6">
          <img src="../../../assets/mobile-store/iphones.png"/>
        </a>
        <div class="hero-col column is-6">
          <p class="title">
            ASRaces
          </p>
          <p class="subtitle">
            Keep track of your performance on Assetto Corsa, Assetto Corsa competizione and F1 2020 and compete to achieve the top positions in the Leaderboard
          </p>
          <div>
            <button class="button terms-and-cond" @click="showTermsAndCondition">Terms & Conditions</button>
            <a target="_blank" href="https://play.google.com/store/apps/details?id=com.tanteappios.timeonlap&gl=SK">
              <img class="stores-img" src="../../../assets/mobile-store/googleplay.png" alt="Google play"/>
            </a>
            <a target="_blank" href="https://apps.apple.com/us/app/asraces/id1521736687?ign-mpt=uo%3D2">
              <img class="stores-img" src="../../../assets/mobile-store/appstore.png" alt="Google play"/>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Races extends Vue {

  showTermsAndCondition() {
    this.$router.push({
      path: 'asraces/terms-and-condition'
    })
  }

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

.hero-col {
  align-self: center;
}

.mobile{
  border-left: 3px solid #ff0000;
  border-bottom: 3px solid #ff0000;
}

.google-play {
  margin-top: 18px;
}

 .columns:last-child {
    margin-bottom: 0px;
  }

  .stores-img {
    height: 40px;
    margin-left: 4px;
  }
 .terms-and-cond {
   height: 40px;
   color: white;
   background-color: #db2525;
   border: 1px solid #750000;
   &:hover {
     color: white;
   }
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
