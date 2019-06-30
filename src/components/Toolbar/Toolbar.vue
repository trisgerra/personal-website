<template>
  <v-toolbar app>
    <v-toolbar-title class="headline text-uppercase">
      <img class="logo" width="63px" :src="logoPath"/>
    </v-toolbar-title>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>


<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Toolbar extends Vue {
  logoPath = '../../assets/logo.png';
}
</script>

<style lang="scss" scoped>

.logo {
  object-fit: scale-down;
  height: 100%;
  }

.headline {
  background-color: #151616;
  padding: 0px 10px;
  height: 100%;
}
</style>
