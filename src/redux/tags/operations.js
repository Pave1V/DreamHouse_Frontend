import API from "../../API"
import { fetchTagsAction } from "./action"

const api = new API()
export const fetchTags = () =>{
    return(
        async dispatch => {
            return(
                api
                .getTags()
                .then(tags=>{
                    dispatch(fetchTagsAction(tags))
                })

                .catch(error=>{
                    alert('Failed to fetch tags')
                })
            )
        }
    )
}