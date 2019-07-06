import { Wrapper } from '@vue/test-utils';
import NavBar from '../NavBar.vue';
import createWrapper from '@/utils/CreateWrapper';

describe('NavBar', () => {
  it('should render as expected', () => {
    const wrapper: Wrapper<NavBar> = createWrapper(NavBar);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('contains a navigation bar', () => {
    const wrapper: Wrapper<NavBar> = createWrapper(NavBar);
    expect(wrapper.findAll('.navbar').length).toBe(1);
  });

  it('contains a logo', () => {
    const wrapper: Wrapper<NavBar> = createWrapper(NavBar);
    expect(wrapper.findAll('.logo').length).toBe(1);
  });

  it('contains an hamburger menu', () => {
    const wrapper: Wrapper<NavBar> = createWrapper(NavBar);
    expect(wrapper.findAll('.navbar-burger').length).toBe(1);
  });

  it('contains the menu items', () => {
    const wrapper: Wrapper<NavBar> = createWrapper(NavBar);
    expect(wrapper.findAll('.navbar-menu').length).toBe(1);
    expect(wrapper.findAll('.navbar-start').length).toBe(1);
  });
});
