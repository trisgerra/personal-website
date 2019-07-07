import { Wrapper } from '@vue/test-utils';
import Home from '../Home.vue';
import createWrapper from '@/utils/CreateWrapper';

describe('Home', () => {
  it('should render as expected', () => {
    const wrapper: Wrapper<Home> = createWrapper(Home);
    expect(wrapper.element).toMatchSnapshot();
  });
});
