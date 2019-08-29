import { Alert } from 'react-native'
import { call, put, all, takeLatest } from 'redux-saga/effects'
import { updateUserSuccess, failure } from './actions'
import navigation from '../../services/navigation'
import api from '../../services/api'
import types from './types'

export function* updateUser({ payload }) {
  const { first_name, middle_name, last_name, email, ...rest } = payload.data
  const me = Object.assign(
    { first_name, middle_name, last_name, email },
    rest.oldPassword ? rest : {}
  )

  try {
    const response = yield call(api.put, 'users', me)
    yield put(updateUserSuccess(response.data.user))
    navigation.navigate('Meetups')
  } catch ({ response: { data } }) {
    Alert.alert('Update Error', 'Error while updating user')
    yield put(failure())
  }
}

export default all([takeLatest(types.UPDATE_USER, updateUser)])
