import { SET_AIRING_TODAY_TV_SHOWS } from '../../actionTypes/contentActionTypes';

const initialState = [],
    airingTodayTVShowsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AIRING_TODAY_TV_SHOWS:
            return action.payload.content
        default:
            return state
    }
}

export default airingTodayTVShowsReducer;