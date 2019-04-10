<template>
  <div>
    <router-link :to="moviePath" >
    <img :src="imageUrl" :alt="movie.title" />
    </router-link>
  </div>
</template>

<script lang="js">
  const POSTER_PATH = 'https://image.tmdb.org/t/p/w154';
  export default {
    name: "Movie",
    props: ['movie'],
    computed: {
      imageUrl(){
        const imagePath = `${POSTER_PATH}/${this.movie.poster_path}`;
        return imagePath;
      },
      moviePath(){
        return `/movie/${this.movie.id}`;
      }
    }
  }
</script>

<style scoped>
  img {
    box-shadow: 0 0 35px whitesmoke;
  }
</style>