import { Wrapper } from '@vue/test-utils';
import NavBar from '../NavBar.vue';
import NavigationBrand from '../NavigationBrand.vue';
import NavigationMenu from '../NavigationMenu.vue';

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

  it('contains a navigation menu', () => {
    const wrapper: Wrapper<NavBar> = createWrapper(NavBar);
    expect(wrapper.findAll(NavigationMenu).length).toBe(1);
  });

  describe('function switchActive', () => {
    test.each`
      isActive        | expectedUpdate
      ${true}         | ${false}        
      ${false}        | ${true}         
      `('returns $expectedUpdate when switch from $actualState', ({ isActive, expectedUpdate }) => {
  const wrapper: Wrapper<NavBar> = createWrapper(NavBar);
  wrapper.setData({
    isActive,
  });
  wrapper.vm.switchActive();
  expect(wrapper.vm.isActive).toBe(expectedUpdate);
  if (expectedUpdate) {
    expect(wrapper.findAll('.is-active').length).toBe(1);
  } else {
    expect(wrapper.findAll('.is-active').length).toBe(0);
  }
});
  });
});
