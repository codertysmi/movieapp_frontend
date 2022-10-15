import client from "../client";

export default {
  // returns list of all the people
  genres: () => client.get("genre/tv/list"),
  details: (id) => client.get(`tv/${id}`),
  credits: (id) => client.get(`tv/${id}/credits`),
  watch_providers: (id) => client.get(`tv/${id}/watch/providers`),
  recomendations: (id) => client.get(`tv/${id}/recommendations`),
  genres: () => client.get("genre/tv/list"),
  getTvByGenre: (genre) => client.get(`https://api.themoviedb.org/3/discover/tv?api_key=14934fb6a09f0b055249564415aa2dea&language=en-US&sort_by=popularity.desc&page=1&with_genres=${genre}`),
};