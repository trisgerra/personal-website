import Vue from 'vue';
import Router from 'vue-router';
import PrivacyPolicy from '@/pages/Portfolio/PrivacyPolicy.vue';
import Home from './pages/Home/Home.vue';
import Portfolio from './pages/Portfolio/Portfolio.vue';
import Blog from './pages/Blog/Blog.vue';

Vue.use(Router);

export interface IRoute {
  path: string,
  name: string,
  component: any
}

export const routes: IRoute[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
  },
  {
    path: '/asraces/terms-and-condition',
    name: 'Terms and conditions',
    component: PrivacyPolicy,
  },
];

export default new Router({
  routes,
});
