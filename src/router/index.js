import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SearchMealResults from "../views/SearchMealResults.vue";
import ShowMealDetails from "../views/ShowMealDetails.vue";
import PageNotFound from "../views/PageNotFound.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/search/:query",
    name: "searchMeal",
    component: SearchMealResults
  },
  {
    path: "/show/:id",
    name: "showMeal",
    component: ShowMealDetails
  },

  {
    path: "*",
    name: "PageNotFound",
    component: PageNotFound
  }
];

const router = new VueRouter({ 
  mode: "history",
base: process.env.BASE_URL,
 routes });

export default router;
