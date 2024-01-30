import * as Actions from './action';
import initialState from '../store/initialstate';

export const favouritesReducer = (state=initialState.favourites, action) => {
    switch (action.type) {
        case Actions.ADD_FAVOURITE:
            return {
                ...state,
                list: action.list
            }
        case Actions.FETCH_FAVOURITE:
            return {
                ...state,
                list: action.list
            }
        case Actions.DELETE_FAVOURITE:
            return {
                ...state,
                list: state.list.filter(fav=>fav.id !== action.id)
            }
    
        default:
            return state;
    }
}