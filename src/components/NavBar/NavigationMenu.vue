<template>
     <div :class="this.navBarMenuClass">
      <div class="navbar-start">
        <!-- navbar items -->
        <router-link
          v-for="route in routes"
          v-bind:key="route.name"
          class="menu-item"
          :to="route.path">
          <a class="navbar-item navbar-router">{{route.name}}</a>
        </router-link>
      </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IRoute, routes } from '../../router';

@Component
export default class NavigationMenu extends Vue {
  @Prop() isActive!: Function;

  routes: IRoute[] = routes;

  get navBarMenuClass(): string {
    return this.isActive ? 'navbar-menu is-active' : 'navbar-menu';
  }
}

</script>

<style scoped lang="scss">
.navbar-router {
  background-color: white;
  font-weight: 500;
  border-bottom: 3px solid white;
  height: 100%;
  color: #151616;
  &:hover {
    color: #151616;
    font-weight: 600;
    border-bottom: 3px solid #151616;
  }
}
</style>
