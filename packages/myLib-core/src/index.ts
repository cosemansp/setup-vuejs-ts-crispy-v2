import FooBar from './components/FooBar.vue';
import Button from './components/Button.vue';

// export * from './myClass';
// export * from './services/userService';

const myLib: any = {
  FooBar,
  Button,
};

// tslint:disable-next-line
myLib.install = function(Vue: any) {
  // Install the components
  Object.keys(myLib).forEach(key => {
    if (key === 'install' || key === 'version') {
      return;
    }
    const component = myLib[key];
    Vue.component(component.options.name, component.options);
  });

  //  Vue.prototype.$toast = Toast
};

// Automatically register components if Vue is available globally
if (typeof window !== 'undefined' && window.Vue) {
  myLib.install(window.Vue);
}

myLib.version = '__VERSION__';
export default myLib;

export { FooBar, Button };
