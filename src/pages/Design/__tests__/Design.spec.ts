import { Wrapper } from '@vue/test-utils';
import Design from '../Design.vue';
import createWrapper from '@/utils/CreateWrapper';

describe('Design', () => {
  it('should render as expected', () => {
    const wrapper: Wrapper<Design> = createWrapper(Design);
    expect(wrapper.element).toMatchSnapshot();
  });
});
