import produce from 'immer'
import types from './types'

const INITIAL_STATE = {
  isLoading: false,
}

export default function meetup(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case types.CREATE_UPDATE_MEETUP || types.ATTEND_MEETUP:
        draft.isLoading = true
        break
      case types.FAILURE:
        draft.isLoading = false
        break
      default:
        draft.isLoading = false
    }
  })
}
