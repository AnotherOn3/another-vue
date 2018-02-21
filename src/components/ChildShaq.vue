<template>
<div>
<h1>I am the {{parentName}}'s child</h1>
<input type="text" v-model="childName"/>
<input type="submit" @click="onClickButton()" value="The ting goes"/>
</div>
</template>

<script>
export default {
  name: 'ChildShaq',
  data() {
    return {
      childName: '',
    };
  },
  props: ['parentName'],
  methods: {
    onClickButton() {
      this.$emit('clicked', this.childName);
    },
  },
};
</script>

<style>

</style>

