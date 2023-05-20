import type { Action } from "redux";

export type State = string
export type SetErrorMessageAction = Action<'@errorMessage/setErrorMesssage'> & {
    payload: State
}
export type Actions = SetErrorMessageAction