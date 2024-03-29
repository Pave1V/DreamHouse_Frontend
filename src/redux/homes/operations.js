import API from "../../API";
import { fetchHomesAction, clearHomesAction } from "./action";

const api = new API()
export const clearHomes = ()=>{
    return async dispatch => {
            dispatch(clearHomesAction())
        }
}

export const fetchHomes = (find, tagId) =>{
    return async dispatch => {
            return(
                api
                .getHomes(find, tagId)
                .then(homes=>{
                    dispatch(fetchHomesAction(homes));
                })

                .catch(error=>{
                    alert('Failed to conect API: /homes/');
                })
            )
        }
}
