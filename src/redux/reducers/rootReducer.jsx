import trendingReducer from './trendingReducer';
import popularMoviesReducer from './popularMoviesReducer';

const rootReducer = {
	content: trendingReducer,
	popularMovies: popularMoviesReducer,
}

export default rootReducer;
