<template>
  <div :class="this.navBarMenuClass">
    <div class="navbar-start">
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
@import '~bulma/sass/utilities/mixins';

.navbar-router {
  background-color: white;
  font-weight: 400;
  height: 100%;
  color: #151616;
  &:hover {
    color: #151616;
    font-weight: 600;
  }
}

.router-link-exact-active {
  a {
    background-color: white;
    font-weight: 600;
  }
}
@include desktop {
  .navbar-router {
      border-bottom: 3px solid white;
      &:hover {
        border-bottom: 3px solid #151616;
      }
    }
    .router-link-exact-active {
        border-bottom: 3px solid #151616;
    }
}

@include touch {
  .navbar-router {
      border-left: 2px solid white;
      &:hover {
        border-left: 2px solid #151616;
      }
    }
}
</style>
