import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import SearchResults from "@/components/SearchResults";
import ItemDetails from "@/components/ItemDetails";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { 
      path: '/', 
      name: 'Home', 
      component: Home 
    },
    {
      path: '/:category/:id',
      name: 'Details Component',
      component: ItemDetails
    },
    {
      path: '/search',
      name: "Search Results",
      component: SearchResults
    }
  ]
});
