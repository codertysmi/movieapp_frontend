import ky from "ky";

const client = ky.extend({
  prefixUrl: "https://api.themoviedb.org/3/",
  searchParams: "?api_key=14934fb6a09f0b055249564415aa2dea&language=en-US",
  hooks: {
    beforeRequest: [
      (request) => {
        // Do something before every request
        // This is a good place to authorize request if needed
      }
    ],
    afterResponse: [
      (response) => {
        // Do something after every response
        // For example, check status code etc...
      }
    ]
  }
});

export default client;