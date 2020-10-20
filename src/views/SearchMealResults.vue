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
import { mapGetters } from "vuex";
export default {
  name: "searchMeal",
  watch: {
    $route(to) {
      this.showResults(to.params.query);
    }
  },
  created() {
    this.showResults();
  },

  computed: {
    ...mapGetters({
      meals: "getSearchMeal"
    })
  },

  methods: {
    showResults() {
      this.$store.dispatch("getSearchResult", this.$route.params.query);
    }
  }
};
</script>

<style scoped>
</style>
