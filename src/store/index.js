import Vue from "vue";
import Vuex from "vuex";
import { randomMeal, searchMeals, showMeals } from "../service/API";
Vue.use(Vuex);
const state = {
    meals: [],
    searchMeals: [],
    showMeals: [],
}
const getters = {
    getRandomMeal(state) {
        return state.meals
    },
    getSearchMeal(state) {
        return state.searchMeals
    },
    getShowMeal(state) {
        return state.showMeals
    }
}
const mutations = {
    SET_MEAL(state, meal) {
        state.meals = meal
    },
    SEARCH_MEAL(state, meal) {
        state.searchMeals = meal
    },
    SHOW_MEAL(state, meal) {
        state.showMeals = meal
    }
}
const actions = {
    async getMeal(state) {
        const m = (await randomMeal()).data.meals
            state.commit("SET_MEAL", m)
    },
    getSearchResult(state, query) {
        searchMeals(query).then(response => {
            let s = response.data.meals
            state.commit("SEARCH_MEAL", s)
        })
    },

    getMealDetails(state, id) {
        showMeals(id).then(response => {
            let d = response.data["meals"]
            state.commit("SHOW_MEAL", d)
        })
    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
});

