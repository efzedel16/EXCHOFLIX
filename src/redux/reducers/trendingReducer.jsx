import { SET_TRENDING } from '../actionTypes/contentActionTypes'

const initialState = [],
	trendingReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_TRENDING:
			return action.payload.content
		default:
			return state
	}
}

export default trendingReducer;