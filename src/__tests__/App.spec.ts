import { Wrapper } from '@vue/test-utils';
import App from '../App.vue';
import NavBar from '../components/NavBar/NavBar.vue';
import createWrapper from '@/utils/CreateWrapper';

describe('App', () => {
  it('should render as expected', () => {
    const wrapper: Wrapper<App> = createWrapper(App);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('contains a NavBar', () => {
    const wrapper: Wrapper<App> = createWrapper(App);
    expect(wrapper.findAll(NavBar).length).toBe(1);
  });
});
