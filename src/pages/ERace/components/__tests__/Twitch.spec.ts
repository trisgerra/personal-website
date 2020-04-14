import { Wrapper } from '@vue/test-utils';
import createWrapper from '@/utils/CreateWrapper';
import Twitch from '../Twitch.vue';

describe('Twitch', () => {
  it('should contain the twitch component', () => {
    const wrapper: Wrapper<Twitch> = createWrapper(Twitch);
    expect(wrapper.findAll('.twitch').length).toBe(1);
  });

  it('should contain the twitch hero bar', () => {
    const wrapper: Wrapper<Twitch> = createWrapper(Twitch);
    expect(wrapper.findAll('.hero').length).toBe(1);
  });

  it('should contain the twitch embedded stream', () => {
    const wrapper: Wrapper<Twitch> = createWrapper(Twitch);
    expect(wrapper.findAll('.frame-stream').length).toBe(1);
  });

  it('should contain the twitch embedded chat', () => {
    const wrapper: Wrapper<Twitch> = createWrapper(Twitch);
    expect(wrapper.findAll('.frame-chat').length).toBe(1);
  });
});
