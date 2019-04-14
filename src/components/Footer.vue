<template>
  <footer>
    <p>&copy; Hridayesh Sharma 2019 - India </p>
  </footer>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style scoped>
  footer {
    position: relative;
  }
  p {
    font-size: 16px;
    text-align: center;
    position: absolute;
    left: calc(100vw - 50%);
    /* top: 50px; */
  }
</style>