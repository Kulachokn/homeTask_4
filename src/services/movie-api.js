const baseURL = "https://www.themoviedb.org/3";
const API_KEY = "6198a531689190f0901c4d490477bd53";

const fetchMovieDetails = movieId => {
  return fetch(`${baseURL}/movies/${movieId}?api_key=${API_KEY}`).then(res =>
    res.json()
  );
};

const fetchMovieWithQuery = searchQuery => {
  return fetch(`${baseURL}/search/movies?q=${searchQuery}?api_key=${API_KEY}`)
    .then(res => res.json())
    .then(entries => entries.map(entry => entry.movie));
};

export default { fetchMovieDetails, fetchMovieWithQuery };
