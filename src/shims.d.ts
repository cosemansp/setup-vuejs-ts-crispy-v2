/* eslint-disable import/export */

declare module '*.vue' {
  import Vue from 'vue';

  export default Vue;
}

declare module '*.json' {
  const value: any;
  export default value;
}

interface Window {
  Vue: any;
}

// Vue.$myGlobal;
// var vm = new Vue()
// vm.$myProperty
// declare module 'vue/types/vue' {
//   // Global properties can be declared on the `VueConstructor` interface
//   interface VueConstructor {
//     $myGlobal: any; // define real typings here if you want
//   }
//   // Instance properties
//   interface Vue {
//     $myProperty: string
//   }
// }
// see also: https://vuejs.org/v2/guide/typescript.html
