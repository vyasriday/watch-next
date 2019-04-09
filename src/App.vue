<template>
  <div id="app">
    <Header :title='title' />
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ul>
      <li v-for="(item, index) in list" :key="index">{{item}}</li>  
    </ul>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'app',
  data() {
    return {
      title: "Vue Movie DB",
      list: [ "Penguin", "Turtle", "Red Panda"]
    }
  },
  components: {
    HelloWorld,
    Header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
