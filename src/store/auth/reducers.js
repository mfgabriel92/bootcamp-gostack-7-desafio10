import produce from 'immer'
import types from './types'

const INITIAL_STATE = {
  token: null,
  isSigned: false,
  isLoading: false,
}

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case types.SIGN_IN || types.SIGN_UP:
        draft.isLoading = true
        break
      case types.SIGN_IN_SUCCESS:
        draft.token = action.payload.token
        draft.isSigned = true
        draft.isLoading = false
        break
      case types.FAILURE:
        draft.token = null
        draft.isSigned = false
        draft.isLoading = false
      default:
    }
  })
}
