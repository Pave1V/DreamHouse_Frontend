import * as Actions from './action';
import initialState from '../store/initialstate';
export const UserReducer = (state = initialState.user, action) => {
    switch (action.type) {
        case Actions.REQUEST:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};