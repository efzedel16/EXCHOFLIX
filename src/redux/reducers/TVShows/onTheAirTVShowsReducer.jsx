import { SET_ON_THE_AIR_TV_SHOWS } from '../../actionTypes/contentActionTypes';

const initialState = [],
    onTheAirTVShowsReducer = (state = initialState, action) => {
        switch (action.type) {
            case SET_ON_THE_AIR_TV_SHOWS:
                return action.payload.content;
            default:
                return state;
        }
    }

export default onTheAirTVShowsReducer;