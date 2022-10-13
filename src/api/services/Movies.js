import client from "../client";

export default {
  // returns list of all the people
  genres: () => client.get("genre/movie/list"),
  details: (id) => client.get(`movie/${id}`),
  credits: (id) => client.get(`movie/${id}/credits`),
};