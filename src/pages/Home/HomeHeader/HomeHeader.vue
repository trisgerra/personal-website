<template>
  <div>
    <div class="container desktop is-hidden-touch">
      <div class="absolute columns">
        <div>
<!--          <img loading="lazy" class="profile"-->
<!--               src="../../../assets/profile2.jpg"-->
<!--               alt="profile image" />-->
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
    <div class="container mobile is-hidden-desktop">
      <div class="columns">
        <div class="column is-12-mobile">
          <img class="profile-mobile" src="../../../assets/profile2.jpg" alt="profile image" />
        </div>
       <div class="column text-container">
          <h2 class="title-mobile">{{title}}</h2>
          <h3 class="subtitle-mobile">{{subtitle}}</h3>
          <p class="description-mobile" v-html="description"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class HomeHeader extends Vue {
  title: string = 'Welcome to my website';

  subtitle: string = 'WHO AM I?';

  description: string = "I'm just a <b>Software developer</b> with a passion for <b>new technologies</b>."
}
</script>

<style lang="scss">

.desktop {
  border-left: 3px solid #FF0000;
  position: relative;
  max-width: 1920px;
  border-bottom: 1px solid #dfdfdf;

  .column {
    height: 40vw;
    border-right: 1px solid #dfdfdf;
  }

  .text-container {
    margin-left: 30px;
  }

  .description {
    font-size: 1.3vw;
    font-weight: 500;
    color: #3f3c3c;
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
    margin-bottom: 60px;
  }

  .description {
    font-size: 1.3vw;
    font-weight: 500;
    color: #3f3c3c;
    margin-bottom: 0px;
  }

  .subtitle {
      font-size: 2vw;
      font-weight: 500;
      color: #3f3c3c;
  }
}


.mobile {
  border-left: 3px solid #ff0000;
  padding:64px;
  text-align: center;

  .profile-mobile {
    border: 5px solid #151616;
    border-radius: 50%;
  }

  .title-mobile {
    color: #3f3c3c;
    font-size: 6vw;
    font-weight: bold;
  }

  .subtitle-mobile {
      font-size: 4vw;
      font-weight: 500;
      margin-top: 30px;
      color: #3f3c3c;
  }
}


</style>
