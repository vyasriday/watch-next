<template>
  <div id="app">
    <Header :title='title' />
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import './assets/styles.css';

export default {
  name: 'app',
  data() {
    return {
      title: "Vue Movie DB"
    }
  },
  components: {
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
}
 .fade-enter-active, .fade-enter-leave {
        transition: all 0.3s ease-in;
  }
  .fade-enter, .fade-leave-to {
      opacity: 0;
      transform: translateX(100%);
  }
</style>
