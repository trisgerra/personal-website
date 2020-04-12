<template>
  <div class="erace">
    <iframe class="frame-stream" src="https://player.twitch.tv/?channel=asraces" frameborder="0" allowfullscreen="no" scrolling="no" :height="$vssHeight" :width="$vssWidth-350"></iframe>
    <iframe cleass="frame-chat" src="https://www.twitch.tv/embed/asraces/chat" frameborder="0" scrolling="no" height="500" width="350"></iframe>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VueScreenSize from 'vue-screen-size';

@Component({
  mixins: [VueScreenSize.VueScreenSizeMixin],
})
export default class ERace extends Vue {

}
</script>

<style lang="scss">
.erace {
  height: 100vh;
}

iframe {
  height: inherit;
}
</style>
