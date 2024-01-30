import API from "../../API"
import { requestAction } from "./action"
import { push } from "connected-react-router"

const api = new API()

export const sellRequest = (param) =>{
    return(
        async dispatch => {
            return(
                api
                .sellRequest(param)
                .then(request=>{
                    dispatch(requestAction(request))
                    dispatch(push('Thank you!'))
                })

                .catch(error=>{
                    alert('Failed to create request')
                })
            )
        }
    )
}