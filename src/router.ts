import Vue from 'vue';
import Router from 'vue-router';
import PrivacyPolicy from '@/pages/ERace/PrivacyPolicy.vue';
import Home from './pages/Home/Home.vue';
import ERace from './pages/ERace/ERace.vue';
import Fitness from './pages/Fitness/Fitness.vue';

Vue.use(Router);

export interface IRoute {
  path: string,
  name: string,
  component: any
}

export const routes: IRoute[] = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home,
  // },
  {
    path: '/',
    name: 'ERace',
    component: ERace,
  },
  // {
  //   path: '/fitness',
  //   name: 'Fitness',
  //   component: Fitness,
  // },
  {
    path: '/terms-and-condition',
    name: 'Terms and conditions',
    component: PrivacyPolicy,
  },
];

export default new Router({
  routes,
});
