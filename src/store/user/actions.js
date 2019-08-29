import types from './types'

const updateUser = data => ({
  type: types.UPDATE_USER,
  payload: { data },
})

const updateUserSuccess = me => ({
  type: types.UPDATE_USER_SUCCESS,
  payload: { me },
})

const failure = () => ({
  type: types.FAILURE,
})

export { updateUser, updateUserSuccess, failure }
