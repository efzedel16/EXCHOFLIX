import HelperAPI from '../../API/HelperAPI'
import { SET_TRENDING, SET_POPULAR_MOVIES } from '../actionTypes/contentActionTypes'

const setTrending = () => async (dispatch) => {
	try {
		const content = await HelperAPI.trending({
			method: 'get'
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
		const content = await HelperAPI.popularMovies({
			method: 'get'
		})
		console.log(content);

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

const contentAction = {
	setTrending,
	setPopularMovies
}

export default contentAction;
