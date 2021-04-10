import HelperAPI from '../../API/HelperAPI'
import { SET_TRENDING } from '../actionTypes/contentActionTypes'

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

const contentAction = {
	setTrending
}

export default contentAction
