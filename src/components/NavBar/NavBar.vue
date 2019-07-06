<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="menu-item" to="/">
        <img class="logo" src="../../assets/logo.png" alt="ADG Official" height="38" />
      </router-link>
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <!-- navbar items -->
        <a class="navbar-item">Blog</a>
        <a class="navbar-item">Design</a>
        <a class="navbar-item">Projects</a>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class NavBar extends Vue {}
</script>

<style scoped lang="scss">
.router-link-active, .router-link-exact-active, .navbar-brand {
  width: fit-content;
}
.navbar {
  height: 50px;
  border-bottom: 1px solid #151616;
}
.logo {
  height: 100%;
  padding: 12px;
  background-color: #151616;
  &:hover {
    background-color: #151616;
    border-left: 3px solid #ff0000;
  }
}
.navbar-item {
  background-color: white;
  font-weight: 400;
  &:hover {
    color: #151616;
    font-weight: 600;
    border-bottom: 3px solid #151616;
  }
}
</style>
