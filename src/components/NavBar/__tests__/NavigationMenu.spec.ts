import { Wrapper } from '@vue/test-utils';
import NavigationMenu from '../NavBar.vue';
import createWrapper from '@/utils/CreateWrapper';

describe('NavigationMenu', () => {
  it('should render as expected', () => {
    const wrapper: Wrapper<NavigationMenu> = createWrapper(NavigationMenu);
    expect(wrapper.element).toMatchSnapshot();
    expect(wrapper.is('.navbar-brand'));
  });

  it('should render as expected', () => {
    const wrapper: Wrapper<NavigationMenu> = createWrapper(NavigationMenu);
    expect(wrapper.findAll('.menu-item').length).toBe(5);
  });
});
