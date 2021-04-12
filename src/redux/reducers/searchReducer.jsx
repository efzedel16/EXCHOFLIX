import { SET_SEARCH } from '../actionTypes/contentActionTypes'

const initialState = {
	searchValue: ''
}

const searchReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_SEARCH:
			return {
				searchValue: action.payload
			}
		default:
			return state
	}
}

export default searchReducer
