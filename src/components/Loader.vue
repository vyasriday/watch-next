<template>
  <div class="wrapper">
  <div class="loader">
  </div>
   <div class="loader">
  </div>
   <div class="loader">
  </div>
</div>
</template>

<script>
  export default {
    name: 'Loader'
  }
</script>

<style scoped>
  .wrapper {
  height:  200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  margin: 0 5px;
  /* box-shadow: 2px 4px 6px grey; */
  opacity: 0.9;
  
}

.loader:nth-child(1) {
  background: grey;
  animation: animate-1 1000ms ease-in 0ms infinite;
  
}
.loader:nth-child(2) {
  background: black;
  animation: animate-2 1000ms ease-in 0ms infinite;
  opacity: 0.8;
}
.loader:nth-child(3) {
  background: darkgrey;
  animation: animate-3 1000ms ease-in 0ms infinite;
}

@keyframes animate-1 {
  25% {transform: translateY(-20px); }
  75% {transform: translateY(20px); }
  
}
@keyframes animate-2 {
   25% {transform: translateY(-30px); }
   75% {transform: translateY(30px); }
}
@keyframes animate-3 {
   25% {transform: translateY(-20px); }
   75% {transform: translateY(20px); }
}
</style>