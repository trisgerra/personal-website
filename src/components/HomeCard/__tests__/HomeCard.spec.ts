import { Wrapper } from '@vue/test-utils';
import HomeCard from '../HomeCard.vue';
import createWrapper from '@/utils/CreateWrapper';
import { homeCards } from '../../../pages/Home/homeCardItems';

describe('HomeCard', () => {
  const wrapper: Wrapper<HomeCard> = createWrapper(HomeCard, {
    propsData: {
      card: homeCards[0],
    },
  });

  it('should render as expected', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('wrapper is a card', () => {
    expect(wrapper.is('.card')).toBeTruthy();
  });

  it('contains the correct title', () => {
    expect(wrapper.findAll('.card-title').length).toBe(1);
    expect(wrapper.find('.card-title').text()).toEqual('WORK EXPERIENCE');
  });

  it('contains the correct number of item', () => {
    expect(wrapper.findAll('.item').length).toBe(8);
    expect(wrapper.find('.item').text()).toEqual('2012 - iOS Internship');
  });
});
