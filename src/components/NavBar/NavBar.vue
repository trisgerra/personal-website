<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <navigation-brand :switch-active="this.switchActive"></navigation-brand>
    <div :class="this.navBarMenuClass">
      <div class="navbar-start">
        <!-- navbar items -->
        <router-link
          v-for="route in routes"
          v-bind:key="route.name"
          class="menu-item"
          :to="route.path"
        >
          <a class="navbar-item navbar-router">{{route.name}}</a>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IRoute, routes } from '../../router';
import NavigationBrand from './NavigationBrand.vue';

@Component({
  components: {
    NavigationBrand,
  },
})
export default class NavBar extends Vue {
  routes: IRoute[] = routes;

  isActive: boolean = false;

  get navBarMenuClass(): string {
    return this.isActive ? 'navbar-menu is-active' : 'navbar-menu' ;
  }

  switchActive(): void {
    this.isActive = !this.isActive;
  }
}
</script>

<style scoped lang="scss">
.navbar {
  border-bottom: 1px solid #151616;
}

.navbar-logo {
  height: 100%;
  background-color: #151616;
  border-left: 3px solid #151616;
  &:hover {
    background-color: #151616;
    border-left: 3px solid #ff0000;
  }
}

.navbar-router {
  background-color: white;
  font-weight: 500;
  border-bottom: 3px solid white;
  height: 100%;

  &:hover {
    color: #151616;
    font-weight: 600;
    border-bottom: 3px solid #151616;
  }
}
</style>
