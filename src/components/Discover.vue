<template>
  <div class="discover-wrapper">
    <div style="overflow:hidden">
    <h3>Popular Movies</h3>
    <div class="scroller">
        <Item v-for="movie in movies" :key="movie.id" :data="movie" category="movie"/>  
    </div>
    </div>
    <div style="overflow:hidden">
      <h3>Popular TV Shows</h3>
      <div class="scroller">
          <Item v-for="show in shows" :key="show.id"  :data="show" category="tv"/>
      </div>
    </div>
  </div>
</template>

<script>
  import Item from '@/components/Item';
  const DISCOVER_URL = 'https://api.themoviedb.org/3/discover/';
  const APIKEY = '4e062be51f8b55a66259160103b5f870';
  export default {
    name: 'Discover',
    data() {
      return {
        shows: [],
        movies: [],
      }
    },
    components: {
      Item
    },
    methods: {
      async fetchMovies() {
        try {
          const res = await fetch(`${DISCOVER_URL}movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`);
          const movies = await res.json();
          this.movies = movies.results;
        } catch (e) {
          throw new Error(e);
        }
      },
      async fetchTVShows() {
        try {
          const res = await fetch(`${DISCOVER_URL}tv?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`);
          const shows = await res.json();
          this.shows = shows.results;
        } catch(e) {
          throw new Error(e);
        }
      }
    },
    created() {
      this.fetchMovies();
      this.fetchTVShows();
    },
    computed: {

    }
  }
</script>

<style scoped>
  .scroller {
    display: flex;
    overflow: auto;
    overflow-y: hidden;
    position: relative;
    margin-bottom: -18px;
  }

  h3 {
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 1.5rem;
    margin-left: 22px;
    color: brown;
  }
  h3:after {
    content: "";
    display: block;
    height: 1px;
    width: 100%;
    background: #4b4b4b;
    margin-top: 10px;
  }
</style>