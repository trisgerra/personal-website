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
        <a class="column is-4" target="_blank" href="https://www.facebook.com/asraces/videos/703386320433694/">
          <img src="https://backendlessappcontent.com/64726CF0-E879-F6BD-FF9E-B1EBD82FE400/8DE78F6A-429B-4718-A971-F10CB731354A/files/assets/races/race1.jpg" alt="Race1"/>
        </a>
        <a id="race2" target="_blank" class="column is-4" href="https://www.facebook.com/asraces/videos/586857158578592/">
          <img src="https://backendlessappcontent.com/64726CF0-E879-F6BD-FF9E-B1EBD82FE400/8DE78F6A-429B-4718-A971-F10CB731354A/files/assets/races/race2.jpg" alt="Race2"/>
        </a>
        <a id="race3" class="column is-4" href="https://www.facebook.com/asraces/videos/227828291771112/">
          <img src="https://backendlessappcontent.com/64726CF0-E879-F6BD-FF9E-B1EBD82FE400/8DE78F6A-429B-4718-A971-F10CB731354A/files/assets/races/race3.jpg" alt="Race3"/>
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
  margin-left: 0px;
}

.races{
  border-left: 3px solid #ff0000;
  border-bottom: 3px solid #ff0000;
}

 .columns:last-child {
    margin-bottom: 0px;
  }

.is-races{
  background-color: #151616;
  h1 {
    color: white;
  }
  h2 {
    color: lightgray;
  }
}
</style>
