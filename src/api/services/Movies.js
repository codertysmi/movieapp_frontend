import client from "../client";
import ky from "ky";

export default {
  // returns list of all the people
  genres: () => client.get("genre/movie/list"),
  details: (id) => client.get(`movie/${id}`),
  credits: (id) => client.get(`movie/${id}/credits`),
  watch_providers: (id) => client.get(`movie/${id}/watch/providers`),
  recomendations: (id) => client.get(`movie/${id}/recommendations`),
  genres: () => client.get("genre/movie/list"),
  getMoviesByGenre: (genre) => ky.get(`https://api.themoviedb.org/3/discover/movie?api_key=14934fb6a09f0b055249564415aa2dea&language=en-US&sort_by=popularity.desc&page=1&with_genres=${genre}`),
};