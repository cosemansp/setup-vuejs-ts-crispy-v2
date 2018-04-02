import { storiesOf } from '@storybook/vue';
import { linkTo } from '@storybook/addon-links';
import { action } from '@storybook/addon-actions';

import addonCentered from '@storybook/addon-centered';

import WelcomeVue from './Welcome.vue';
import ButtonVue from '../components/Button.vue';

storiesOf('Welcome', module).add('Welcome', () => ({
  render: h => h(Welcome, { props: { goToButton: linkTo('Button') } }),
}));

storiesOf('Components|MyButton', module)
  .addDecorator(Centered)
  .add('rounded', () => ({
    components: { MyButton },
    template:
      '<my-button :rounded="true" @clicked="log">A Button with rounded edges</my-button>',
    methods: {
      log: action('log'),
    },
  }));
