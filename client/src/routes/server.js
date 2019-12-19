import fill from './_fill';

/**************************************/

/// route, route.base ///
const route = {
  base : 'http://localhost:5000/api',
}

/// route.to ///
route.to = {}
/// - .allMovies ///
route.to.allMovies = {};
route.to.allMovies.GET =
  () => (`/movies`)
/// - .oneMovie ///
route.to.oneMovies = {};
route.to.oneMovies.GET =
  (id) => (`/movies/${id}`)

/// route.url ///
route.url = fill (route.base, route.to)

/**************************************/

export default route