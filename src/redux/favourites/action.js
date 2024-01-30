export const ADD_FAVOURITE = 'ADD_FAVOURITE'
export const addFavouriteAction = (favourites)=> {
    return {
        type: 'ADD_FAVOURITE',
        payload: favourites
    }
}

export const FETCH_FAVOURITE = 'FETCH_FAVOURITE'
export const fetchFavouriteAction = (favourites)=> {
    return {
        type: 'FETCH_FAVOURITE',
        payload: favourites
    }
}

export const DELETE_FAVOURITE = 'DELETE_FAVOURITE'
export const deleteFavouriteAction = (id)=> {
    return {
        type: 'DELETE_FAVOURITE',
        id
        }
}

export const ERROR_FAVOURITE = 'ERROR_FAVOURITE'
export const errorFavouriteAction = (errors) => {
    return{
        type: 'ERROR_FAVOURITE',
        payload: {errors}
    }
}