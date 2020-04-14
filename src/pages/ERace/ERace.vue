<template>
  <div class="erace">
    <races/>
    <twitch/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Twitch from './components/Twitch.vue';
import Races from './components/Races.vue';

@Component({
  components: {
    Twitch,
    Races,
  },
})
export default class ERace extends Vue {

}
</script>
