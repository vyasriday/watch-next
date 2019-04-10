<template>
  <div>
    <ul>
      <li v-for="movie in movies" :key="movie.id">
        <Movie :movie="movie"/>
      </li>
    </ul>
  </div>
</template>

<script lang="js">
import Movie from "./Movie.vue";
  export default {
    name: "MoviesList",
    data() {
      return {
        movies: []
      }
    },
    created() {
      this.fetchData();
    },
    methods: {
      async fetchData(){
        try {
          const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=4e062be51f8b55a66259160103b5f870&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
          const movies = await res.json();
          this.movies = movies.results; 
        } catch (e){
          console.log(e);
        }
      }
    },
    components: {
      Movie
    }
  }
</script>

<style scoped>
  ul {
    display: grid;
    list-style: none;
    padding: 1rem;
    margin: 0;
    grid-row-gap: 1rem;
    grid-template-columns: repeat(6, 1fr);
  }
</style>