import { Wrapper } from '@vue/test-utils';
import createWrapper from '@/utils/CreateWrapper';
import Home from '../Home.vue';
import HomeHeader from '../HomeHeader/HomeHeader.vue';
import HomeCard from '../../../components/HomeCard/HomeCard.vue';
import SquareCard from '../SquareCard/SquareCard.vue';

describe('Home', () => {
  it('contains an HeadHero', () => {
    const wrapper: Wrapper<Home> = createWrapper(Home);
    expect(wrapper.findAll(HomeHeader).length).toBe(1);
  });
});
