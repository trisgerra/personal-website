<template>
  <div class="container is-hidden-touch">
    <div class="absolute columns">
      <div>
        <img class="profile" src="../../../assets/profile.jpg" alt="profile image" />
      </div>
      <div class="column text-container">
        <h2 class="title">{{title}}</h2>
        <h3 class="subtitle">{{subtitle}}</h3>
        <p class="description" v-html="description"></p>
      </div>
    </div>
    <nav class="columns">
      <div class="column first"></div>
      <div class="column"></div>
      <div class="column"></div>
      <div class="column"></div>
      <div class="column"></div>
      <div class="column"></div>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class HeadHero extends Vue {
  title: string = 'Welcome to my <space/>';

  subtitle: string = 'WHO AM I?';

  description: string = "I'm a <b>enthusiast</b> Software developer but first of all I consider myself as ethernal curious,</br> that loves to <b>learn</b>, new things everyday."
}
</script>

<style lang="scss" scoped>
.text-container {
  margin-left: 30px;
}
.container {
  border-left: 3px solid #FF0000;
  position: relative;
  max-width: 1920px;
  border-bottom: 1px solid #dfdfdf;
}
.column {
  height: 40vw;
  border-right: 1px solid #dfdfdf;
}

.description {
    font-size: 1.3vw;
    font-weight: 500;
    color: #3f3c3c;
    margin-left: 20px;
    margin-bottom: 0px;
}

.first{
  border: 0px;
}
.columns {
  position: relative;
  width: 100%;
  margin: 0px;
}
.absolute {
  position: absolute;
  margin-left: 30px;
  margin-top: 10%;
}
.profile {
  border: 5px solid #151616;
  border-radius: 50%;
  width: 20vw;
  height: 20vw;
}

.title {
  color: #3f3c3c;
  font-size: 4vw;
  font-weight: bold;
  margin-bottom: 40px;
}

.subtitle {
    font-size: 2vw;
    font-weight: 500;
    color: #3f3c3c;
    margin-left: 20px;
    margin-bottom: 0px;
}

p {
    margin-left: 20px;
}
</style>
