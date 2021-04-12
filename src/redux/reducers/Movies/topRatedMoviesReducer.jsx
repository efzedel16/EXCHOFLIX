import { SET_TOP_RATED_MOVIES } from '../../actionTypes/contentActionTypes';

const initialState = [],
    topRatedMoviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOP_RATED_MOVIES:
            return action.payload.content;
        default:
            return state;
    }
}

export default topRatedMoviesReducer;