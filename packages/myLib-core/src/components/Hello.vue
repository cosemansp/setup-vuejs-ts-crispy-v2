<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
// Optional separated ts file
// export { default } from './Hello';
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class Hello extends Vue {
  @Prop() message: String;
  msg = 'Welcome';

  created() {
    console.log('created');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
</style>
