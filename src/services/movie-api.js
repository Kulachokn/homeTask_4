const baseURL = "https://api.themoviedb.org/3/";
const key = "6198a531689190f0901c4d490477bd53";
const searchMovies = "search/movie?query=";
const searchMovieDetails = "movie/";
// const baseImageUrl = 'https://image.tmdb.org/t/p/original';
// const noimage = 'https://pixabay.com/';

// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
const fetchMovies = () => {
    return fetch(`${baseURL}trending/all/day?api_key=${key}`)
        .then(res => res.json())
        .then(data => {
            return data.results;
        });
};

// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
const fetchMovieWithQuery = query => {
    return fetch(
        `${baseURL}${searchMovies}${query}&api_key=${key}&language=en-US&page=1&include_adult=true`)
        .then(res => res.json())
        .then(data => {
            return data.results;
        });
};

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
const fetchMovieDetails = movieId => {
    return fetch(
        `${baseURL}${searchMovieDetails}${movieId}?api_key=${key}&language=en-US`)
        .then(res => {
            const response = res.json();

            if (res.status === 404) {
                throw new Error('Movie not found');
            } else if (res.status !== 200) {
                throw new Error(response)
            }

            return response;
        });
};

// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>
const fetchMovieCast = movieId => {
    return fetch(
        `${baseURL}${searchMovieDetails}${movieId}/credits?api_key=${key}`)
        .then(res => res.json())
        .then(data => {
            return data.results.cast;
        });
};

// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
const fetchMovieReviews = movieId => {
    return fetch(
        `${baseURL}${searchMovieDetails}${movieId}/reviews?api_key=${key}`)
        .then(res => res.json())
        .then(data => {
            return data.results;
        });
};

export default {fetchMovieDetails, fetchMovieWithQuery, fetchMovies, fetchMovieCast, fetchMovieReviews};


