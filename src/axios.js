import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
})
export default instance;



/*
const API_KEY = "201f38d2a01bbee05cd5aec0b429b77a";
const BASE_URL = "https://api.themoviedb.org/3";

axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
  .then(response => {
    // Success! Here's the list of popular movies.
    console.log(response.data.results);
  })
  .catch(error => {
    // Oops! There was an error getting the list of popular movies.
    console.error(error);
  });*/

