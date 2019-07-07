import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/Home/Home.vue';
import Blog from './pages/Blog/Blog.vue';
import Design from './pages/Design/Design.vue';
import Projects from './pages/Projects/Projects.vue';

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
    path: '/blog',
    name: 'Blog',
    component: Blog,
  },
  {
    path: '/design',
    name: 'Design',
    component: Design,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
  },
];

export default new Router({
  routes,
});
