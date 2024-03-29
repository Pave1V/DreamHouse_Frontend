import * as Actions from './action'
import initialState from '../store/initialstate'

export const UserReducer = (state=initialState.user, action) =>{
    switch (action.type) {
        case Actions.SIGN_UP:
            return {
                ...state,
                ...action.payload
            }

        case Actions.SIGN_IN:
            return {
                ...state,
                ...action.payload
            }

        case Actions.SIGN_OUT:
            return {
                ...state
            }
    
        default:
            return state
    }
}