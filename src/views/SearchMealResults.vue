<template>
  <b-container>
    <b-row>
      <b-col
        v-for="(meal, index) in meals"
        :key="index"
        cols="12"
        md="6"
        lg="4"
      >
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
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { searchMeals } from "../API.js";
export default {
  name: "searchMeal",
  data() {
    return {
      meals: []
    };
  },

  watch: {
    $route(to) {
      this.showResults(to.params.query);
    }
  },
  created() {
    this.showResults(this.$route.params.query);
  },

  methods: {
    showResults(query) {
      searchMeals(query).then(response => {
        this.meals = response.data["meals"];

           if (this.meals == null)
          this.$router.push({
            name: "PageNotFound"

          });
      });


    }
  }
};
</script>

<style scoped>
</style>
