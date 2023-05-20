import { Dispatch } from "redux"
import { setErrorMesssage } from "./actions"

export const generateErrorMessage =
(errorMessage: string = 'some error eccurred') =>
(dispatch: Dispatch) =>{
    dispatch(setErrorMesssage(''))
    try{
        throw new Error(errorMessage)
    } catch(e){
        if ( e instanceof Error ) dispatch(setErrorMesssage(e.message))
    }
}