import trendingReducer from './trendingReducer'
import popularMoviesReducer from './Movies/popularMoviesReducer'
import nowPlayingMoviesReducer from './Movies/nowPlayingMoviesReducer'
import upcomingMoviesReducer from './Movies/upcomingMoviesReducer'
import topRatedMoviesReducer from './Movies/topRatedMoviesReducer'
import popularTVShowsReducer from './TVShows/popularTVShowsReducer'
import topRatedTVShowsReducer from './TVShows/topRatedTVShowsReducer'
import airingTodayTVShowsReducer from './TVShows/airingTodayTVShowsReducer'
import onTheAirTVShowsReducer from './TVShows/onTheAirTVShowsReducer'
import searchReducer from './searchReducer'
import searchResultReducer from './searchResultReducer'

const rootReducer = {
	trending: trendingReducer,
	popularMovies: popularMoviesReducer,
	nowPlayingMovies: nowPlayingMoviesReducer,
	upcomingMovies: upcomingMoviesReducer,
	topRatedMovies: topRatedMoviesReducer,
	popularTVShows: popularTVShowsReducer,
	topRatedTVShows: topRatedTVShowsReducer,
	airingTodayTVShows: airingTodayTVShowsReducer,
	onTheAirTVShows: onTheAirTVShowsReducer,
	searchValue: searchReducer,
	searchResult: searchResultReducer
}

export default rootReducer
