<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <navigation-brand :switch-active="this.switchActive"></navigation-brand>
    <navigation-menu :is-active="this.isActive"></navigation-menu>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import NavigationBrand from './NavigationBrand.vue';
import NavigationMenu from './NavigationMenu.vue';

@Component({
  components: {
    NavigationBrand,
    NavigationMenu,
  },
})
export default class NavBar extends Vue {
  isActive: boolean = false;

  switchActive(): void {
    this.isActive = !this.isActive;
  }
}
</script>

<style scoped lang="scss">
.navbar {
  border-bottom: 1px solid #DFDFDF;
}
</style>
