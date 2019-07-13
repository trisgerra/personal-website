import { Wrapper } from '@vue/test-utils';
import SquareCard from '../SquareCard.vue';
import createWrapper from '@/utils/CreateWrapper';

describe('HomeCard', () => {
  const wrapper: Wrapper<SquareCard> = createWrapper(SquareCard, {
    propsData: {
      item: {
        title: 'Test',
        color: '#FFF',
      },
    },
  });

  it('should render as expected', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('wrapper is a square-card', () => {
    expect(wrapper.is('.square-card')).toBeTruthy();
  });
});
