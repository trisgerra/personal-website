import { Wrapper } from '@vue/test-utils';
import NavBar from '../NavBar.vue';
import NavigationBrand from '../NavigationBrand.vue';

import createWrapper from '@/utils/CreateWrapper';

describe('NavBar', () => {
  it('should render as expected', () => {
    const wrapper: Wrapper<NavBar> = createWrapper(NavBar);
    expect(wrapper.element).toMatchSnapshot();
    expect(wrapper.is('.navbar-brand'));
  });

  it('contains a navigation bar', () => {
    const wrapper: Wrapper<NavBar> = createWrapper(NavBar);
    expect(wrapper.findAll('.navbar').length).toBe(1);
  });

  it('contains a navigation brand', () => {
    const wrapper: Wrapper<NavBar> = createWrapper(NavBar);
    expect(wrapper.findAll(NavigationBrand).length).toBe(1);
  });

  it('contains the menu items', () => {
    const wrapper: Wrapper<NavBar> = createWrapper(NavBar);
    expect(wrapper.findAll('.navbar-menu').length).toBe(1);
    expect(wrapper.findAll('.navbar-start').length).toBe(1);
  });

  describe('function switchActive', () => {
    test.each`
      actualState     | expectedUpdate  
      ${'is-active'}  | ${''} 
      ${''}           | ${'is-active'} 
      ${'test'}       | ${'is-active'} 
      `('returns $expectedUpdate when switch from $actualState', ({ actualState, expectedUpdate }) => {
  const wrapper: Wrapper<NavBar> = createWrapper(NavBar, {
    propsData: {
      isActive: actualState,
    },
  });
  wrapper.vm.switchActive();
  expect(wrapper.vm.isActive).toBe(expectedUpdate);
});
  });
});
