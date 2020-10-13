<template>
  <div class="home">
    <div v-for="(meal, index) in meals" :key="index">
      <router-link :to="{ name: 'showMeal', params: { id: meal.idMeal } }">
        <b-card
          img-top
          :img-src="meal.strMealThumb"
          :title="meal.strMeal"
          style="max-width: 20rem;"
          class="mb-2"
        >
        </b-card>
      </router-link>
    </div>
  </div>
</template>

<script>
  

import { randomMeal } from "../API.js";
export default {
  name: "Home",
  data() {
    return {
      meals: []
    };
  },
  created() {
    randomMeal().then(response => {
      this.meals = response.data["meals"];
    });
  }
};
</script>

<style scoped>
.home {
  padding-top: 80px;
  padding-left: 400px;
}
</style>
