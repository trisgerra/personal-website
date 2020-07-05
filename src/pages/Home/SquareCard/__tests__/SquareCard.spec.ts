import { Wrapper } from '@vue/test-utils';
import createWrapper from '@/utils/CreateWrapper';
import SquareCard from '../SquareCard.vue';

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
