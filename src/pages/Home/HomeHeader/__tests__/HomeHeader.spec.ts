import { Wrapper } from '@vue/test-utils';
import createWrapper from '@/utils/CreateWrapper';
import HomeHeader from '../HomeHeader.vue';

describe('Home', () => {
  it('contains profile image', () => {
    const wrapper: Wrapper<HomeHeader> = createWrapper(HomeHeader);
    expect(wrapper.findAll('.profile').length).toBe(1);
    expect(wrapper.findAll('.profile-mobile').length).toBe(1);
  });

  it('contains title', () => {
    const wrapper: Wrapper<HomeHeader> = createWrapper(HomeHeader);
    expect(wrapper.findAll('.title').length).toBe(1);
    expect(wrapper.findAll('.title-mobile').length).toBe(1);
    expect(wrapper.find('.title').text()).toEqual('Welcome to my website');
    expect(wrapper.find('.title-mobile').text()).toEqual('Welcome to my website');
  });

  it('contains subtitle', () => {
    const wrapper: Wrapper<HomeHeader> = createWrapper(HomeHeader);
    expect(wrapper.findAll('.subtitle').length).toBe(1);
    expect(wrapper.findAll('.subtitle-mobile').length).toBe(1);
    expect(wrapper.find('.subtitle').text()).toEqual('WHO AM I?');
    expect(wrapper.find('.subtitle-mobile').text()).toEqual('WHO AM I?');
  });

  it('contains description', () => {
    const wrapper: Wrapper<HomeHeader> = createWrapper(HomeHeader);
    expect(wrapper.findAll('.description').length).toBe(1);
    expect(wrapper.findAll('.description-mobile').length).toBe(1);
  });
});
