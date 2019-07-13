import { Wrapper } from '@vue/test-utils';
import NavigationBrand from '../NavigationBrand.vue';
import createWrapper from '@/utils/CreateWrapper';

describe('NavigationBrand', () => {
  const switchActiveSpy = jest.fn();
  const wrapper: Wrapper<NavigationBrand> = createWrapper(NavigationBrand, {
    propsData: {
      switchActive: switchActiveSpy,
    },
  });
  it('should render as expected', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('contains logo', () => {
    expect(wrapper.findAll('.navbar-logo').length).toBe(1);
  });

  it('contains burger menu for smaller device', () => {
    expect(wrapper.findAll('.navbar-burger').length).toBe(1);
  });

  it('click on burger menu should trigger switchActive function', () => {
    wrapper.find('.navbar-burger').trigger('click');
    expect(switchActiveSpy).toHaveBeenCalledTimes(1);
  });
});
