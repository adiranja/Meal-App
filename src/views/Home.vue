<template>
  <div>
    <div class="home" v-for="(meal, index) in meals" :key="index">
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
import { mapGetters } from "vuex";
export default {
  name: "Home",

  created() {
    this.$store.dispatch("getMeal");
  },
  computed: {
    ...mapGetters({
      meals: "getRandomMeal"
    })
  }
};
</script>

<style scoped>
.home {
  width: 300px;
  height: 150px;

  margin-top: 80px;
}
</style>
