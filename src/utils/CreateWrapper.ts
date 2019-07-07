import {
  Wrapper,
  mount,
  createLocalVue,
} from '@vue/test-utils';
import VueRouter from 'vue-router';
import router from '../router';

const localVue = createLocalVue();
localVue.use(VueRouter);

export default (component: any, options: object = {}): any => mount(component, {
  localVue,
  router,
  ...options,
});
