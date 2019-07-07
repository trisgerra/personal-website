import { Wrapper } from '@vue/test-utils';
import Projects from '../Projects.vue';
import createWrapper from '@/utils/CreateWrapper';

describe('Projects', () => {
  it('should render as expected', () => {
    const wrapper: Wrapper<Projects> = createWrapper(Projects);
    expect(wrapper.element).toMatchSnapshot();
  });
});
