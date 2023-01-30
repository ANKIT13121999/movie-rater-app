import axios from "axios";
//https://movie-rater-app-backend.onrender.com/
const client = axios.create({
  baseURL: "https://movie-rater-app-backend.onrender.com/api",
});

export default client;
