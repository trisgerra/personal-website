import { Wrapper } from '@vue/test-utils';
import App from '../App.vue';
import Toolbar from '../components/Toolbar/Toolbar.vue';
import createWrapper from '@/utils/CreateWrapper';

describe('App', () => {
  it('should render as expected', () => {
    const wrapper: Wrapper<App> = createWrapper(App);
    expect(wrapper.element).toMatchSnapshot();
    expect(wrapper.is('#app'));
  });

  it('contains a toolbar', () => {
    const wrapper: Wrapper<App> = createWrapper(App);
    expect(wrapper.findAll(Toolbar).length).toBe(1);
  });

  it('contains a content container', () => {
    const wrapper: Wrapper<App> = createWrapper(App);
    expect(wrapper.findAll('#content').length).toBe(1);
  });
});
