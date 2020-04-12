import { Wrapper } from '@vue/test-utils';
import createWrapper from '@/utils/CreateWrapper';
import ERace from '../ERace.vue';

describe('ERace', () => {
  it('should render as expected', () => {
    const wrapper: Wrapper<ERace> = createWrapper(ERace);
    expect(wrapper.element).toMatchSnapshot();
  });
});
