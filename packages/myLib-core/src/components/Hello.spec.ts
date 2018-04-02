import { shallow } from '@vue/test-utils';
import Hello from './Hello.vue';

describe('Hello Component', () => {
  it('should have a default "msg" set to "Welcome"', () => {
    const component = new Hello();
    expect(component.msg).toBe('Welcome');
  });

  it('default render', () => {
    const wrapper = shallow(Hello);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
