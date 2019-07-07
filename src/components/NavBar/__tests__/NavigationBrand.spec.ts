import { Wrapper } from '@vue/test-utils';
import NavigationBrand from '../NavigationBrand.vue';
import createWrapper from '@/utils/CreateWrapper';

describe('NavigationBrand', () => {
  it('should render as expected', () => {
    const wrapper: Wrapper<NavigationBrand> = createWrapper(NavigationBrand);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('contains logo', () => {
    const wrapper: Wrapper<NavigationBrand> = createWrapper(NavigationBrand);
    expect(wrapper.findAll('.navbar-logo').length).toBe(1);
  });

  it('contains burger menu for smaller device', () => {
    const wrapper: Wrapper<NavigationBrand> = createWrapper(NavigationBrand);
    expect(wrapper.findAll('.navbar-burger').length).toBe(1);
  });

  it('click on burger menu should trigger switchActive function', () => {
    const switchActiveSpy = jest.fn();
    const wrapper: Wrapper<NavigationBrand> = createWrapper(NavigationBrand, {
      propsData: {
        switchActive: switchActiveSpy,
      },
    });
    wrapper.find('.navbar-burger').trigger('click');
    expect(switchActiveSpy).toHaveBeenCalledTimes(1);
  });
});
