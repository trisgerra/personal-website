import { Wrapper } from '@vue/test-utils';
import createWrapper from '@/utils/CreateWrapper';
import Portfolio from '../Portfolio.vue';

describe('Portfolio', () => {
  it('should contain the portfolio component', () => {
    const wrapper: Wrapper<Portfolio> = createWrapper(Portfolio);
    expect(wrapper.findAll('.portfolio').length).toBe(1);
  });
});
