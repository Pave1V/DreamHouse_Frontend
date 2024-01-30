import * as Actions from './action';
import initialState from '../store/initialstate';

export const TagsReducer = (state = initialState.tags, action) => {
    switch (action.type) {
        case Actions.FETCH_TAG:
            return {
                ...state,
                list: action.list
            };
        default:
            return state;
    }
};