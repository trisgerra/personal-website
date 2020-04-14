<template>
  <div class="erace columns">
    <iframe class="frame-stream column is-10-desktop is-8-tablet is-12-mobile" src="https://player.twitch.tv/?channel=asraces" frameborder="0" allowfullscreen="no" scrolling="no"></iframe>
    <iframe class="frame-chat column is-2-desktop is-4-tablet is-hidden-mobile" src="https://www.twitch.tv/embed/asraces/chat?darkpopout" frameborder="0" scrolling="no"></iframe>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ERace extends Vue {

}
</script>

<style lang="scss">
.erace {
  height: 96vh;

  .column{
    padding: 0px;
  }
}

iframe {
  height: inherit;
}
</style>
