import App from '../App.vue';
import createWrapper from '@/utils/CreateWrapper';
import { Wrapper } from '@vue/test-utils';
describe('App', () => {
    it('should render as expected', () => {
        const wrapper: Wrapper<App> = createWrapper(App);
        expect(wrapper.element).toMatchSnapshot();
    });
})