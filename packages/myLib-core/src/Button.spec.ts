import { shallow } from '@vue/test-utils';
import Button from './Button.vue';

describe('Button.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallow(Button, {
      propsData: { msg },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});