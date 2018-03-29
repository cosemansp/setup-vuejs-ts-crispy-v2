<template>
  <button class="button" :style="{color: color, borderColor: color}" @click="onClick" :class="{rounded: rounded}">
    <slot></slot>!</button>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    rounded: Boolean,
    color: {
      default: '#42b983',
    },
  },
  methods: {
    onClick(event) {
      this.$emit('clicked', event);
    },
  },
});
</script>

<style>
.rounded {
  border-radius: 5px;
}
.button {
  border: 3px solid;
  padding: 10px 20px;
  background-color: white;
  outline: none;
}
</style>
