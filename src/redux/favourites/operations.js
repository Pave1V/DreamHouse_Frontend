import API from "../../API";
import { fetchFavouriteAction, addFavouriteAction, deleteFavouriteAction, errorFavouriteAction } from "./action";

const api = new API()

export const fetchFavourites = () => {
    return(
        async dispatch => {
            return(
                api
                .getFavourites()
                .then(favourites=>{
                    dispatch(fetchFavouriteAction(favourites))
                })

                .catch(errors=>{
                    dispatch(errorFavouriteAction(errors))
                })
            )
        }
    )
}

export const addFavourites = (addFavouriteBody) => {
    return(
        async dispatch => {
            return(
                api
                .addFavourites(addFavouriteBody)
                .then(addfav=>{
                    dispatch(addFavouriteAction(addfav))
                })

                .catch(errors=>{
                    dispatch(errorFavouriteAction(errors))
                })
            )
        }
    )
}

export const deleteFavourite = (id) => {
    return(
        async dispatch => {
            return(
                api
                .deleteFavourite(id)
                .then(id=>{
                    dispatch(deleteFavouriteAction(id))
                })

                .catch(errors=>{
                    dispatch(errorFavouriteAction(errors))
                })
            )
        }
    )
}

