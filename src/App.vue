<template>
  <v-app id="app">
    <toolbar></toolbar>
    <v-content id="content">
      Hello
    </v-content>
  </v-app>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import Home from './views/Home.vue';
import Toolbar from './components/Toolbar/Toolbar.vue';

@Component({
  components: {
    Home,
    Toolbar
  }
})
export default class App extends Vue {}

</script>

<style lang="scss">
.v-toolbar__content {
  padding: 0px;
}
</style>
