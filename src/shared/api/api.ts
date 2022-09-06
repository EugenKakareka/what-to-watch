import axios from "axios";

const API = "https://api.themoviedb.org/3";

export const IMAGE_API_S = "https://image.tmdb.org/t/p/w300";
export const IMAGE_API_L = "https://image.tmdb.org/t/p/w500";

const API_KEY = process.env.REACT_APP_API_KEY;

export const api = axios.create({
  baseURL: API,
  params: {
    api_key: API_KEY,
  },
});