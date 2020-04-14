<template>
  <div class="races">
    <section class="hero is-races">
        <div class="hero-body">
          <div class="container is-fluid">
            <h1 class="title">
              Races
            </h1>
            <h2 class="subtitle">
              Do you want to join us? Send me a message
            </h2>
          </div>
        </div>
      </section>
      <div id="race1" class="past-races columns">
        <a class="column is-6" href="https://www.facebook.com/asraces/videos/703386320433694/">
          <img src="../../../assets/races/race1.png" alt="Race1"/>
        </a>
        <a id="race2" class="column is-6" href="https://www.facebook.com/asraces/videos/586857158578592/">
          <img src="../../../assets/races/race2.png" alt="Race2"/>
        </a>
      </div>
      <div id="race3" class="past-races columns">
        <a class="column is-offset-3 is-6" href="https://www.facebook.com/asraces/videos/227828291771112/">
          <img src="../../../assets/races/race3.png" alt="Race3"/>
        </a>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Races extends Vue {

}
</script>

<style lang="scss">
.past-races {
  background:#151616;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 32px;
}


.is-races{
  background-color: #151616;
  h1 {
    color: white;
  }
  h2 {
    color: white;
  }
}
</style>
