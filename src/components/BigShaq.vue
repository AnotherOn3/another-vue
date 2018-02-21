<template>
  <h1>Hello {{ name }}</h1>
</template>

<script>
export default {
  // this is how you can use it as custom html tag, this will be the name of your component
  name: 'BigShaq',
  data() {
    return {
      name: 'BigShaq',
    };
  },
};
</script>
