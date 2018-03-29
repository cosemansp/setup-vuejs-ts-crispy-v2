import FooBar from './FooBar.vue';
import Button from './Button.vue';

export * from './myClass';
export * from './services/userService';

const myLib: any = {
  FooBar,
  Button
};

// tslint:disable-next-line
myLib.install = function (Vue: any) {
  // Install the components
  Object.keys(myLib).forEach(key => {
    if (key === 'install') {
      return;
    }

    const component = myLib[key];
    Vue.component(component.name, component);
  });

  //  Vue.prototype.$toast = Toast
};

// // Automatically register components if Vue is available globally
if (typeof window !== 'undefined' && window.Vue) {
  myLib.install(window.Vue);
}

console.log(process.env.NODE_ENV)

myLib.version = '__VERSION__';
export default myLib;

export { FooBar, Button };
