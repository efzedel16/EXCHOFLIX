import { SET_SEARCH_RESULT } from '../actionTypes/contentActionTypes'

const initialState = []

const searchResultReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_SEARCH_RESULT:
			return action.payload.content
		default:
			return state
	}
}

export default searchResultReducer
