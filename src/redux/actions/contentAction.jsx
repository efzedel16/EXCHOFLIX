import APIKey from '../../API/APIKey'
import HelperAPI from '../../API/HelperAPI'
import {
	SET_TRENDING,
	SET_POPULAR_MOVIES,
	SET_NOW_PLAYING_MOVIES,
	SET_UPCOMING_MOVIES,
	SET_TOP_RATED_MOVIES,
	SET_FREE_WATCH
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
		console.log(content)

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

const contentAction = {
	setTrending,
	setPopularMovies,
	setNowPlayingMovies,
	setUpcomingMovies,
	setTopRatedMovies,
	setFreetoWatch
}

export default contentAction
