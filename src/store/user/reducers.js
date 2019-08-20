import produce from 'immer'
import authTypes from '../auth/types'

const INITIAL_STATE = {
  me: null,
}

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case authTypes.SIGN_IN_SUCCESS:
        draft.me = action.payload.me
        break
      case authTypes.FAILURE:
        draft.me = null
      default:
    }
  })
}
