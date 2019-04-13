<template>
  <div>
    <input @input="displayDropdown" @blur="hideDropdown" type="text" v-model="searchQuery" required maxlength="80" placeholder="    Search For Movies and Tv Shows"/> 
    <span @click="goToSearchResults('all')" title="All of What Next" class="search-icon"><i class="fa fa-search" aria-hidden="true"></i></span>
      <ul>
        <li @click="goToSearchResults('tv')"><span class="queryText">{{searchQuery}}</span> in TV Shows</li>
        <li @click="goToSearchResults('movies')"><span class="queryText">{{searchQuery}}</span> in Movies</li>
      </ul>
  </div>
</template>

<script>
  export default {
    name: "Search",
    data() {
      return {
        searchQuery: ''
      }
    },
    methods: {
      goToSearchResults(category) {
        this.$router.push({path: '/search', query: {category, name: this.searchQuery}});
      },
      displayDropdown() {
        const input = document.querySelector('input');
        const dropDown = document.querySelector('ul');  
        if(input.value.length && input.value !== ' ') {
          dropDown.style.display = 'block';
          input.style.borderRadius = '10px 10px 0  0';
        } else {
          dropDown.style.display = 'none';
          input.style.borderRadius = '300px';
        }
      },
      hideDropdown() {
        const input = document.querySelector('input');
        const dropDown = document.querySelector('ul');
        dropDown.style.display = 'none';
        input.style.borderRadius = '300px';

      }
    }
  }
</script>

<style scoped>
  div {
    box-sizing: border-box;
    padding: 20px 0;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin-left: 30px;
  }
  input {
    width: 80%;
    margin-right: 10px;
    border-radius: 250px;
    height: 28px;
    outline: none;
    border: transparent;
    box-shadow: 2px 4px 7px;
    font-size: 16px;
    
   
  }
  input:active {
    outline: 1px solid white;
  }
  button {
    border-radius: 10%;
    background: #e6e0c7;
    padding: 4px 16px;
    border: none;
    cursor: pointer;
    outline: none;
    font-size: 16px;
    font-weight: 400;

  }
  ul {
    padding: 0;
    list-style: none;
    width: 80%;
    display: none;
    margin-top: 0;
    background: #fdfdfd;
  }
  li {
    border: none;
    padding: 2px 0;  
    padding-left: 12px;
    margin: 6px 0;
    cursor: pointer;
  }

  .search-icon {
    position: absolute;
    right: 20%;
    margin-right: 8px;
    margin-top: 8px;
    cursor: pointer;
  }
  .active-dropdown {
    display: block;
  }

  .queryText {
    font-weight: bolder;
    color: #222;
    letter-spacing: 1px;
  }
  @media(max-width:411px) {
    div {
      margin-left: 10px;
      justify-content: flex-start;
    }
    input, a > li {
      width: 90%;
    }
    .search-icon {
      right: 12%;
    }
  }

</style>