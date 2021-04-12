import APIKey from '../../API/APIKey'
import HelperAPI from '../../API/HelperAPI'
import {
	SET_TRENDING,
	SET_POPULAR_MOVIES,
	SET_NOW_PLAYING_MOVIES,
	SET_UPCOMING_MOVIES,
	SET_TOP_RATED_MOVIES,
	SET_FREE_WATCH,
	SET_POPULAR_TV_SHOWS,
	SET_TOP_RATED_TV_SHOWS,
	SET_AIRING_TODAY_TV_SHOWS,
	SET_ON_THE_AIR_TV_SHOWS,

} from '../actionTypes/contentActionTypes'

const setTrending = () => async (dispatch) => {
	try {
		const content = await HelperAPI({
			method: 'get',
			url: `/trending/all/week?api_key=${APIKey}&language=en-US`
		})

		dispatch({
			type: SET_TRENDING,
			payload: {
				content: content.data.results
			}
		})
	} catch (error) {
		console.log(error)
	}
}

const setPopularMovies = () => async (dispatch) => {
	try {
		const content = await HelperAPI({
			method: 'get',
			url: `/movie/popular?api_key=${APIKey}&language=en-US&page=1`
		})

		dispatch({
			type: SET_POPULAR_MOVIES,
			payload: {
				content: content.data.results
			}
		})
	} catch (error) {
		console.log(error)
	}
}

const setNowPlayingMovies = () => async (dispatch) => {
	try {
		const content = await HelperAPI({
			method: 'get',
			url: `/movie/now_playing?api_key=${APIKey}&language=en-US&page=1`
		})

		console.log(content.data.results)
		dispatch({
			type: SET_NOW_PLAYING_MOVIES,
			payload: {
				content: content.data.results
			}
		})
	} catch (error) {
		console.log(error)
	}
}

const setUpcomingMovies = () => async (dispatch) => {
	try {
		const content = await HelperAPI({
			method: 'get',
			url: `/movie/upcoming?api_key=${APIKey}&language=en-US&page=1`
		})

		dispatch({
			type: SET_UPCOMING_MOVIES,
			payload: {
				content: content.data.results
			}
		})
	} catch (error) {
		console.log(error)
	}
}

const setTopRatedMovies = () => async (dispatch) => {
	try {
		const content = await HelperAPI({
			method: 'get',
			url: `movie/top_rated?api_key=${APIKey}&language=en-US&page=1`
		})

		dispatch({
			type: SET_TOP_RATED_MOVIES,
			payload: {
				content: content.data.results
			}
		})
	} catch (error) {
		console.log(error)
	}
}

const setFreetoWatch = () => async (dispatch) => {
	try {
		const content = await HelperAPI.freetoWatch({
			method: 'get'
		})

		dispatch({
			type: SET_FREE_WATCH,
			payload: {
				content: content.data.results
			}
		})
	} catch (error) {
		console.log(error)
	}
}

const setPopularTVShows = () => async (dispatch) => {
	try {
		const content = await HelperAPI({
			method: 'get',
			url: `tv/popular?api_key=${APIKey}&language=en-US&page=1`
		})

		dispatch({
			type: SET_POPULAR_TV_SHOWS,
			payload: {
				content: content.data.results
			}
		})
	} catch (error) {
		console.log(error)
	}
}

const setTopRatedTVShows = () => async (dispatch) => {
	try {
		const content = await HelperAPI({
			method: 'get',
			url: `tv/top_rated?api_key=${APIKey}&language=en-US&page=1`
		})

		dispatch({
			type: SET_TOP_RATED_TV_SHOWS,
			payload: {
				content: content.data.results
			}
		})
	} catch (error) {
		console.log(error)
	}
}

const setAiringTodayTVShows = () => async (dispatch) => {
	try {
		const content = await HelperAPI({
			method: 'get',
			url: `tv/airing_today?api_key=${APIKey}&language=en-US&page=1`
		})

		dispatch({
			type: SET_AIRING_TODAY_TV_SHOWS,
			payload: {
				content: content.data.results
			}
		})
	} catch (error) {
		console.log(error)
	}
}

const setOnTheAirTVShows = () => async (dispatch) => {
	try {
		const content = await HelperAPI({
			method: 'get',
			url: `tv/on_the_air?api_key=${APIKey}&language=en-US&page=1`
		})

		dispatch({
			type: SET_ON_THE_AIR_TV_SHOWS,
			payload: {
				content: content.data.results
			}
		})
	} catch (error) {
		console.log(error)
	}
}

const contentAction = {
	setTrending,
	setPopularMovies,
	setNowPlayingMovies,
	setUpcomingMovies,
	setTopRatedMovies,
	setFreetoWatch,
	setPopularTVShows,
	setTopRatedTVShows,
	setAiringTodayTVShows,
	setOnTheAirTVShows
}

export default contentAction;
