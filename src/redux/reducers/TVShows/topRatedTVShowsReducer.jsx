import { SET_TOP_RATED_TV_SHOWS } from '../../actionTypes/contentActionTypes';

const initialState = [];
const topRatedTVShowsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOP_RATED_TV_SHOWS:
            return action.payload.content
        default:
            return state
    }
}

export default topRatedTVShowsReducer;