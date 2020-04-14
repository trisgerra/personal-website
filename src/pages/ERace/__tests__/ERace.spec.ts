import { Wrapper } from '@vue/test-utils';
import createWrapper from '@/utils/CreateWrapper';
import ERace from '../ERace.vue';

describe('ERace', () => {
  it('should contain the races component', () => {
    const wrapper: Wrapper<ERace> = createWrapper(ERace);
    expect(wrapper.findAll('.races').length).toBe(1);
  });
  it('should contain the twitch component', () => {
    const wrapper: Wrapper<ERace> = createWrapper(ERace);
    expect(wrapper.findAll('.twitch').length).toBe(1);
  });
});
