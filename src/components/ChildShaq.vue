<template>
<div>
<h1>I am the {{parentName}}'s child</h1>
<input type="submit" @click="onClickButton()" value="The ting goes"/>
</div>
</template>

<script>
export default {
  name: 'ChildShaq',
  props: ['parentName'],
  methods: {
    onClickButton() {
      this.$emit('clicked', 'skrra');
    },
  },
};
</script>

<style>

</style>

