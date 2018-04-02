<template>
  <div>
    {{ text }}
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'FooBar',
  components: {},
  props: [],
  data() {
    return {};
  },
  computed: {
    text() {
      return 'Foo Bar! This is a VueJS component.';
    },
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {},
});
</script>

<style lang='scss'>
div {
  font-size: 18px;
}
</style>
