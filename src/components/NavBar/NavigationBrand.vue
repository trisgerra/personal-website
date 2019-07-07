<template>
  <div class="navbar-brand">
    <router-link class="menu-item" to="/">
      <div class="navbar-item navbar-logo">
        <img src="../../assets/logo.png" alt="ADG Official" height="38" />
      </div>
    </router-link>
    <a
      role="button"
      class="navbar-burger"
      aria-label="menu"
      aria-expanded="false"
      @click="this.switchActive">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IRoute, routes } from '../../router';

@Component
export default class NavigationBrand extends Vue {
  @Prop() switchActive!: Function;
}
</script>

<style scoped lang="scss">

.navbar-logo {
  height: 100%;
  background-color: #151616;
  border-left: 3px solid #151616;
  &:hover {
    background-color: #151616;
    border-left: 3px solid #ff0000;
  }
}
</style>
