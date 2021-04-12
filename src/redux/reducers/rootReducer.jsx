import trendingReducer from './trendingReducer'
import popularMoviesReducer from './popularMoviesReducer'
import nowPlayingMoviesReducer from './nowPlayingMoviesReducer'
import upcomingMoviesReducer from './upcomingMoviesReducer'
import topRatedMoviesReducer from './topRatedMoviesReducer'
import searchReducer from './searchReducer'

const rootReducer = {
	trending: trendingReducer,
	popularMovies: popularMoviesReducer,
	nowPlayingMovies: nowPlayingMoviesReducer,
	upcomingMovies: upcomingMoviesReducer,
	topRatedMovies: topRatedMoviesReducer,
	searchValue: searchReducer
}

export default rootReducer
