<template>
  <div>

  </div>
</template>

<script>
const API = 'https://api.themoviedb.org/3/search/'
  export default {
    name: 'SearchResults',
    data() {
      return {
        name: this.$route.query.name,
        category: this.$route.query.category,
        result
      }
    },
    methods: {
      fetchResults() {

      }
    },
  }
</script>

<style lang="scss" scoped>

</style>