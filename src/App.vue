<template>
  <div id="app">
    <Header :title='title' />
    <transition name="fade">
      <router-view />
    </transition>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './assets/styles.css';

export default {
  name: 'app',
  data() {
    return {
      title: "Vue Movie DB"
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
 .fade-enter-active, .fade-enter-leave {
    transition: all 0.3s ease-in;
  }
  .fade-enter, .fade-leave-to {
      opacity: 0;
      transform: translateX(100%);
  }
</style>
