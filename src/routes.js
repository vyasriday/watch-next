import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
// import SearchResult from "@/components/SearchResult";
// import ItemDetails from "@/components/ItemDetails";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { 
      path: "/", 
      name: "Home", 
      component: Home 
    },
    // {
    //   path: "/search/:item",
    //   name: "Seach Result",
    //   component: "SearchResult"
    // },
    // {
    //   path: "/movies/:id",
    //   name: "Movie Details",
    //   component: "ItemDetails"
    // },
    // {
    //   path: "/tv-shows/:id",
    //   name: "Tv Show Details",
    //   component: "ItemDetails"
    // }
  ]
});
