<template>
  <div class="portfolio">
    <mobile-app/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MobileApp from './components/MobileApp.vue';
@Component({
  components: {
    MobileApp
  },
})
export default class Portfolio extends Vue {

}
</script>
