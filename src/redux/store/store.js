import {thunk} from 'redux-thunk'
import {legacy_createStore, combineReducers, applyMiddleware, compose} from 'redux'
import { UserReducer } from '../users/reducers'
import { TagsReducer } from '../tags/reducers'
import { homesReducer } from '../homes/reducers'
import { favouritesReducer } from '../favourites/reducers' 
import {composeWithDevTools} from 'redux-devtools-extension'

const reducers = combineReducers({
    homes: homesReducer,
    users: UserReducer,
    tags: TagsReducer,
    favourites: favouritesReducer,
})

const store = legacy_createStore(reducers, applyMiddleware(thunk))

export default store