import { Wrapper } from '@vue/test-utils';
import createWrapper from '@/utils/CreateWrapper';
import Races from '../Races.vue';

describe('Races', () => {
  it('should contain the twitch component', () => {
    const wrapper: Wrapper<Races> = createWrapper(Races);
    expect(wrapper.findAll('.races').length).toBe(1);
  });

  it('should contain the twitch hero bar', () => {
    const wrapper: Wrapper<Races> = createWrapper(Races);
    expect(wrapper.findAll('.hero').length).toBe(1);
  });

  it('should contain the link to all the races', () => {
    const wrapper: Wrapper<Races> = createWrapper(Races);
    expect(wrapper.findAll('#race1').length).toBe(1);
    expect(wrapper.findAll('#race2').length).toBe(1);
    expect(wrapper.findAll('#race3').length).toBe(1);
  });
});
