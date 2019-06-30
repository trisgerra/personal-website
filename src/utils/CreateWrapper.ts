import {
  mount,
  createLocalVue
} from '@vue/test-utils';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import router from '../router';

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(Vuetify);

export default (component: any, options: object = {}): any => mount(component, {
  localVue,
  router,
  ...options
});
