<template>
  <div class="container pt-3">
    <div v-for="(meal, index) in meals" :key="index">
      <b-card-group>
        <b-card
          img-top
          :img-src="meal.strMealThumb"
          :title="meal.strMeal"
          style="max-width: 20rem;"
          class="mb-2"
        >
        </b-card>
        <b-card class="meal-font">
          <b-row>
            <b-col>
              <div class="text-left">
                <strong>Ingredient</strong>
              </div>
              <b-card-text class="text-left">
                <template v-for="index in 20">
                  <li
                    class="no-list-style"
                    v-if="getIngredient(index)"
                    :key="index"
                  >
                    {{ getIngredient(index) }}
                  </li>
                </template>
              </b-card-text>
            </b-col>
            <b-col>
              <div class="text-left">
                <strong>Measure</strong>
              </div>
              <b-card-text class="text-left">
                <template v-for="index in 20">
                  <li
                    class="no-list-style"
                    v-if="getMeasure(index)"
                    :key="index"
                  >
                    {{ getMeasure(index) }}
                  </li>
                </template>
              </b-card-text>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <hr />
              <div class="text-left">
                <strong>Instructions</strong>
              </div>
              <b-card-text class="text-left pb-5">{{
                meals[0].strInstructions
              }}</b-card-text>
            </b-col>
          </b-row>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "showMeal",
  created() {
    this.$store.dispatch("getMealDetails", this.$route.params.id);
  },
  computed: {
    ...mapGetters({
      meals: "getShowMeal"
    })
  },
  methods: {
    getIngredient(index) {
      const ingredient = "strIngredient" + index;

      const mealIngredient = this.meals[0][ingredient];

      if (mealIngredient && mealIngredient.trim()) return mealIngredient;
    },

    getMeasure(index) {
      const measure = "strMeasure" + index;

      const mealMeasure = this.meals[0][measure];

      if (mealMeasure && mealMeasure.trim()) return mealMeasure;
    }
  }
};
</script>

<style scoped>
.meal-font {
  font-size: 0.9rem;
}
</style>