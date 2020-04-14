<template>
<div>
  <section class="hero is-primary">
      <div class="hero-body">
        <div class="container is-fluid">
          <h1 class="title">
            Checkout the ASRaces Twitch account
          </h1>
          <h2 class="subtitle">
            Am I not online? Check the past videos
          </h2>
        </div>
      </div>
    </section>
      <div class="twitch columns">
    <iframe class="frame-stream column is-10-desktop is-8-tablet is-12-mobile" src="https://player.twitch.tv/?channel=asraces" frameborder="0" allowfullscreen="no" scrolling="no"></iframe>
    <iframe class="frame-chat column is-2-desktop is-4-tablet is-hidden-mobile" src="https://www.twitch.tv/embed/asraces/chat?darkpopout" frameborder="0" scrolling="no"></iframe>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Twitch extends Vue {

}
</script>

<style lang="scss">
.twitch {
  background-color: #18181b;
  padding: 32px;

  .column{
    padding: 0px;
  }
}

iframe {
  height: 50vw;
  padding-bottom: 32px;
}
</style>
