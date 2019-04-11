<template>
  <div class="home-wrapper">
    <Search />
    <Discover />
  </div>
</template>

<script>
import Search from './Search.vue';
import Discover from './Discover.vue';


  export default {
    name: 'Home',
    data() {
      return {

      }
    },
    components: {
      Search,
      Discover
    }
  }
</script>

<style scoped>

</style>