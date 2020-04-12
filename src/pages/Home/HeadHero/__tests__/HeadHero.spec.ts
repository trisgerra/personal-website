import { Wrapper } from '@vue/test-utils';
import HeadHero from '../HeadHero.vue';
import createWrapper from '@/utils/CreateWrapper';

describe('Home', () => {
  it('should render as expected', () => {
    const wrapper: Wrapper<HeadHero> = createWrapper(HeadHero);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('contains 6 column as background', () => {
    const wrapper: Wrapper<HeadHero> = createWrapper(HeadHero);
    const navWrapper : Wrapper<any> = wrapper.findAll('.columns').at(1);
    expect(navWrapper.findAll('.column').length).toBe(6);
  });

  it('contains profile image', () => {
    const wrapper: Wrapper<HeadHero> = createWrapper(HeadHero);
    expect(wrapper.findAll('.profile').length).toBe(1);
  });

  it('contains title', () => {
    const wrapper: Wrapper<HeadHero> = createWrapper(HeadHero);
    expect(wrapper.findAll('.title').length).toBe(1);
    expect(wrapper.find('.title').text()).toEqual('Andrea DG <website/>');
  });

  it('contains subtitle', () => {
    const wrapper: Wrapper<HeadHero> = createWrapper(HeadHero);
    expect(wrapper.findAll('.subtitle').length).toBe(1);
    expect(wrapper.find('.subtitle').text()).toEqual('WHO AM I?');
  });

  it('contains description', () => {
    const wrapper: Wrapper<HeadHero> = createWrapper(HeadHero);
    expect(wrapper.findAll('.description').length).toBe(1);
  });
});
