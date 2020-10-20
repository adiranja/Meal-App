import axios from "axios";

const URL = "https://www.themealdb.com/api/json/v1/1/";

export function randomMeal()
{
  return axios.get(URL + "random.php")
}

export function searchMeals(query)
{
  return axios.get(URL + `search.php?s=${query}`)  
}

export function showMeals(id)
{
  return axios.get(URL + `lookup.php?i=${id}`)
}