<template>
  <div v-if="loading" class="wrapper">
    <div class="loader">
      <i class="fa fa-search" aria-hidden="true"></i>
      <h3> Searching . . . </h3>
    </div>
  </div>
  <div v-else>
    <div class="results-wrapper">
      <router-link :to="category == 'multi'? `/${result.media_type}/${result.id}`: itemUrl(result.id)" class="result-item" v-for="result in results" :key="result.id">
        <div class="image-wrapper">
          <img :src="imageUrl(result.poster_path)" :alt="result.title">
        </div>
        <div class="item-info">
          <h4>{{result.original_title ? result.original_title:result.original_name}}</h4>
          <p v-if="result.release_date">{{result.release_date.substring(0,4)}}</p>
          <p v-if="result.first_air_date">{{result.first_air_date.substring(0,4)}}</p>
          <p>IMDB: <span class="rating">{{result.vote_average}}</span></p> 
          <p class="overview">{{result.overview? result.overview: ''}}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
const API = 'https://api.themoviedb.org/3/search/';
const API_KEY = '4e062be51f8b55a66259160103b5f870';
const POSTER_PATH = 'https://image.tmdb.org/t/p/w300';

  export default {
    name: 'SearchResults',
    data() {
      return {
        name: this.$route.query.name,
        category: this.$route.query.category,
        results: [],
        loading: true
      }
    },
    methods: {
      async fetchResults() {
        const URL = `${API}${this.category}?api_key=${API_KEY}&language=en-US&page=1&query=${this.name}`;
        const res = await fetch(URL);
        const result = await res.json();
        this.results = result.results;
        this.loading = false;
      },
      //  imageUrl to generate path for each poster image
      imageUrl(path){
        const imagePath = path==null?'https://via.placeholder.com/300':`${POSTER_PATH}/${path}`;
        return imagePath;
      },
      itemUrl(id){
        return `/${this.category}/${id}`;
      }
    },
    created() {
      this.fetchResults();
    }
  }
</script>

<style  scoped>

  .results-wrapper {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    margin-top: 20px;
  }
  a {
    text-decoration: none;
    color: unset;
    display: flex;
    padding: 2% 4%;
    margin: 20px auto;
    box-shadow: 1px 4px 11px;
    border-radius: 6px;
    background: #f0f8ffd6;
    width: 84%;
   
  }
  .image-wrapper {
    height: 300px;
    width: 200px;
    max-height: 300px;
    max-width: 200px;
    margin-right: 14px;
    align-self: center;
   
  }
  img {
    width: 100%;
    height: 100%;
    box-shadow: 2px 2px 2px;

  }

  .item-info {
    width: 70vw;
  }
  .overview {
    text-align: justify;
    letter-spacing: 1px;
  }

  .wrapper {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-info > * {
  padding: 4px 8px;
  letter-spacing: 1px;
  line-height: 1.1;

}  
.loader i {
  animation: animate 700ms ease-in infinite;
  font-size: 56px;
}

@keyframes animate {
  0% {
    font-size: 56px;
  }
  50% {
    font-size: 28px;
  }
  75% {
    font-size: 56px;
  }
  100% {
    font-sizr: 28px;
  }
}
 
 @media(max-width: 460px) {
   a {
     flex-direction: column;
    
   } 
   a .image-wrapper {
     max-width: 100%;
     width: 100%;
     margin-right: 0;
   }

   .item-info {
     width: unset;
   }
 }

</style>