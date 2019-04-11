<template>
  <div>
    <input type="text" v-model="searchQuery" required  placeholder="  Search For Movies and Tv Shows"/> 
    <button @click="searchResult">Go</button>
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
      searchResult() {
        return;
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
    margin-left: 30px;
  }
  input {
    width: 80%;
    margin-right: 10px;
    border-radius: 10px 250px 250px 10px;
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
  @media(max-width:411px) {
    div {
      margin-left: 10px;
      justify-content: flex-start;
    }
  }
  
</style>