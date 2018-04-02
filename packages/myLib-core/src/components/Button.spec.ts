import { shallow } from '@vue/test-utils';
import Button from './Button.vue';

describe('Button.vue', () => {
  test('default props', () => {
    const button = new Button();
    expect(button.rounded).toBe(false);
    expect(button.color).toBe('#42b983');
  });

  test('default render', () => {
    const wrapper = shallow(Button);
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('renders props.rounded when passed', () => {
    const wrapper = shallow(Button, { propsData: { rounded: true } });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('renders props.color when passed', () => {
    const wrapper = shallow(Button, { propsData: { color: '#ff0000' } });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
