import { SET_POPULAR_TV_SHOWS } from '../../actionTypes/contentActionTypes';

const initialState = [],
    popularTVShowsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POPULAR_TV_SHOWS:
            return action.payload.content
        default:
            return state
    }
}

export default popularTVShowsReducer;