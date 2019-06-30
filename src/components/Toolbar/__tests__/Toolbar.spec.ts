import { Wrapper } from '@vue/test-utils';
import Toolbar from '../Toolbar.vue';
import createWrapper from '@/utils/CreateWrapper';

describe('Toolbar', () => {
  it('should render as expected', () => {
    const wrapper: Wrapper<Toolbar> = createWrapper(Toolbar);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('contains the toolbar title', () => {
    const wrapper: Wrapper<Toolbar> = createWrapper(Toolbar);
    expect(wrapper.findAll('.headline').length).toBe(1);
  });

  it('contains the image logo', () => {
    const wrapper: Wrapper<Toolbar> = createWrapper(Toolbar);
    expect(wrapper.findAll('img').length).toBe(1);
    expect(wrapper.find('img').attributes('src')).toContain('../assets/logo.png');
  });
});
