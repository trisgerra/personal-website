import { Wrapper } from '@vue/test-utils';
import Blog from '../Blog.vue';
import createWrapper from '@/utils/CreateWrapper';

describe('Design', () => {
  it('should render as expected', () => {
    const wrapper: Wrapper<Blog> = createWrapper(Blog);
    expect(wrapper.element).toMatchSnapshot();
  });
});
