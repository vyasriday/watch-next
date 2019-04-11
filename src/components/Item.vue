<template>
  <div style="position:relative">
    <router-link :to="itemUrl" >
    <img :src="imageUrl" />
    </router-link>
    <div class="description">
    <p class="title">{{category === 'movie'? data.title: data.name }}</p>
    <p v-if="category=='movie'"> Releae Date: {{data.release_date}}</p>
    <p v-else>First Air Date: {{data.first_air_date}}</p>
    <p> IMDB Rating: {{data.vote_average}}</p>
    </div>
  </div>
</template>

<script>
  const POSTER_PATH = 'https://image.tmdb.org/t/p/w300';
  export default {
    name: "Item",
    props: ['data', 'category'],
    computed: {
      imageUrl(){
        const imagePath = `${POSTER_PATH}/${this.data.poster_path}`;
        return imagePath;
      },
      itemUrl(){
        return `/${this.category}/${this.data.id}`;
      },
      truncatedOverview() {
        return this.data.overview.substring(0, 150);
      }
    }
  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Dokdo');
  div {
    margin: 0 15px;
    transition: all 500ms ease-in 100ms;
    padding: 2rem 0;
  }

  div:hover {
    transform: scale(1.1);
  }

  div:hover > .description {
    top: calc(300px - 170px);
    z-index: 0;
    height: 150px;
    transform: unset;
  }
  .description {
    font-family: 'Dokdo', cursive;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 50px;
    z-index: -1;
    height: 0px;
    position: absolute;
    width: 250px;
    background:linear-gradient(90deg, rgb(1, 4, 14) 0%, rgba(0, 58, 117, 0.9948354341736695) 100%);
    margin-left: 0;
    opacity: 0.9;
    transition: all .5s ease-out 400ms;
    cursor: pointer;
  }

  a {
    box-shadow: 2px 4px 9px;
  }
  img {
    width: 250px;
    height: 300px;

  }
  .description {
    z-index: -1;
    position: absolute;
    color: #9e9eb3;
    font-size: 20px;
    text-align: center;
  }
  .description > p {
    margin: 4px auto;
  }
  .title {
    font-size: 24px;
  }

</style>