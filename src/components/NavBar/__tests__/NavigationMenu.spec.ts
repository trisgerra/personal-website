import { Wrapper } from '@vue/test-utils';
import createWrapper from '@/utils/CreateWrapper';
import NavigationMenu from '../NavBar.vue';

describe('NavigationMenu', () => {
  it('should render as expected', () => {
    const wrapper: Wrapper<NavigationMenu> = createWrapper(NavigationMenu);
    expect(wrapper.element).toMatchSnapshot();
    expect(wrapper.is('.navbar-brand'));
  });

  it('should render as expected', () => {
    const wrapper: Wrapper<NavigationMenu> = createWrapper(NavigationMenu);
    expect(wrapper.findAll('.menu-item').length).toBe(3);
  });
});
