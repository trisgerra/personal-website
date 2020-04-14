import { Wrapper } from '@vue/test-utils';
import createWrapper from '@/utils/CreateWrapper';
import App from '../App.vue';
import NavBar from '../components/NavBar/NavBar.vue';

describe('App', () => {
  it('contains a NavBar', () => {
    const wrapper: Wrapper<App> = createWrapper(App);
    expect(wrapper.findAll(NavBar).length).toBe(1);
  });

  it('contains a router-view', () => {
    const wrapper: Wrapper<App> = createWrapper(App);
    expect(wrapper.findAll('.router-view').length).toBe(1);
  });
});
