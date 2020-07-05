<template>
  <div class="erace">
    <mobile-app/>
    <races/>
    <twitch/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MobileApp from '@/pages/ERace/components/MobileApp.vue';
import Twitch from './components/Twitch.vue';
import Races from './components/Races.vue';

@Component({
  components: {
    MobileApp,
    Twitch,
    Races,
  },
})
export default class ERace extends Vue {

}
</script>
