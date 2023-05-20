import type * as T from './types'

export const setErrorMesssage = (payload: T.State): T.SetErrorMessageAction=>({
    type: '@errorMessage/setErrorMesssage',
    payload
})