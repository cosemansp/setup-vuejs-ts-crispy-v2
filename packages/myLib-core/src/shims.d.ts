declare module '*.vue' {
  import vue from 'vue';
  export default Vue;
}

declare module '*.json' {
  const value: any;
  export default value;
}

interface Window {
  Vue: any;
}

declare module '@storybook/addon-centered';
