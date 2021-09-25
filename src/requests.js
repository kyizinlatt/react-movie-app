const APIKEY = "34328e65f915ebbc2129c94c901695bc";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=28&language=en-US`,
  fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35&language=en-US`,
  fetchHorroryMovies: `/discover/movie?api_key=${APIKEY}&with_genres=27&language=en-US`,
  fetchRomanceMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10749&language=en-US`,
  fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&with_genres=99&language=en-US`,
};

export default requests;
