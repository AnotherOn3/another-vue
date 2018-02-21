<template>
  <div>
    <h1>Hello {{ name }}</h1>
    <input type="submit" @click="changeName()" value="Smoke Trees"/>
    <input type="text" v-model="name">
    <ChildShaq :parentName="name" @clicked = "onClickChild"/>
    <h2>My child name is {{childName}}</h2>
  </div>
</template>

<script>
export default {
  // this is how you can use it as custom html tag, this will be the name of your component
  name: 'BigShaq',
  // This is for storing the data
  data() {
    return {
      name: 'BigShaq',
      childName: '',
    };
  },
  watch: {},
  // This is for creating custom methods
  methods: {
    changeName() {
      this.name = 'Lemon tree';
    },
    changeValue(event) {
      this.name = event.target.value;
    },
    onClickChild(value) {
      this.childName = value;
    },
  },
  //this is when the element have mounted
  mounted() {
    console.log('It is mounted');
  },
  //this is when an element has been updated, after a event
  updated() {
    console.log('It updated!');
  },
};
</script>
