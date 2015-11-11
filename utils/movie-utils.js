const formatMovie = movie => ({
  title: movie.movie.title,
  released: movie.movie.released,
  ids: movie.movie.ids,
  sinopsis: movie.movie.overview,
  runtime: movie.movie.runtime,
  votes: movie.movie.votes,
  rating: movie.movie.rating,
  genres: movie.movie.genres,
  certification: movie.movie.certification
});

const getImages = movie => ({
  images:{
    poster: movie.movie.images.poster.thumb,
    fanart: movie.movie.images.fanart.thumb,
  }
});

const formatMovieWithImages = movie => {
  const id = movie.movie.ids.trakt;
  const movieDataWithImages = Object.assign({}, formatMovie(movie), getImages(movie));
  return {[id]: movieDataWithImages};
};

module.exports = {
  formatMovie,
  getImages,
  formatMovieWithImages
};
