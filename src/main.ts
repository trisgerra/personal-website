import Vue from 'vue';
import Buefy from 'buefy';
import PrismicVue from '@prismicio/vue';
import 'buefy/dist/buefy.css';
import VueObserveVisibility from 'vue-observe-visibility';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import linkResolver from './utils/LinkResolver';


Vue.config.productionTip = false;
Vue.use(Buefy);
Vue.use(VueObserveVisibility);
Vue.use(PrismicVue, {
  endpoint: process.env.VUE_APP_PRISMIC_URL,
  linkResolver,
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
