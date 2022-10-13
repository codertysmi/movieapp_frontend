import client from "../client";
import ky from "ky";

export default {
  // returns list of all the people
  trending: () => client.get("trending/all/day"),
  // return one specific person
  trendingWeek: () => client.get(`trending/all/week`),
  action: () =>  ky.get("https://api.themoviedb.org/3/discover/movie?api_key=14934fb6a09f0b055249564415aa2dea&language=en-US&page=1&with_genres=28"),
  horror: () =>  ky.get("https://api.themoviedb.org/3/discover/movie?api_key=14934fb6a09f0b055249564415aa2dea&language=en-US&sort_by=popularity.desc&page=1&with_genres=27"),
  scienceFiction: () =>  ky.get("https://api.themoviedb.org/3/discover/movie?api_key=14934fb6a09f0b055249564415aa2dea&language=en-US&sort_by=popularity.desc&page=1&with_genres=878"),
  details: (id) => client.get(`movie/${id}`),

};