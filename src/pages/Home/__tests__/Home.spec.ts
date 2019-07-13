import { Wrapper } from '@vue/test-utils';
import Home from '../Home.vue';
import HeadHero from '../HeadHero/HeadHero.vue';
import HomeCard from '../HomeCard/HomeCard.vue';
import SquareCard from '../SquareCard/SquareCard.vue';
import createWrapper from '@/utils/CreateWrapper';

describe('Home', () => {
  it('should render as expected', () => {
    const wrapper: Wrapper<Home> = createWrapper(Home);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('contains an HeadHero', () => {
    const wrapper: Wrapper<Home> = createWrapper(Home);
    expect(wrapper.findAll(HeadHero).length).toBe(1);
  });

  it('contains the correct number of CardItem', () => {
    const wrapper: Wrapper<Home> = createWrapper(Home);
    expect(wrapper.findAll(HomeCard).length).toBe(2);
  });

  it('contains the correct number of Square Item', () => {
    const wrapper: Wrapper<Home> = createWrapper(Home);
    expect(wrapper.findAll('.square-row').length).toBe(2);
    expect(wrapper.findAll(SquareCard).length).toBe(8);
  });
});
