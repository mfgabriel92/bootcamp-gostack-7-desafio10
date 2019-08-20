import { call, put, all, takeLatest } from 'redux-saga/effects'
import { Alert } from 'react-native'
import { signInSuccess } from './actions'
import api from '../../services/api'
import navigation from '../../services/navigation'
import types from './types'

export function setToken({ payload }) {
  if (!payload) return

  const { token } = payload

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`
  }
}

export function* signIn({ payload }) {
  try {
    const { email, password } = payload
    const { data } = yield call(api.post, 'auth', { email, password })
    const { user, token } = data

    api.defaults.headers.Authorization = `Bearer ${token}`

    yield put(signInSuccess(user, token))
  } catch ({ response }) {
    Alert.alert('Sign-in Error', 'Error while signing in')
  }
}

export function* signUp({ payload }) {
  try {
    const { first_name, last_name, email, password } = payload
    yield call(api.post, 'users', {
      first_name,
      last_name,
      email,
      password,
    })

    navigation.navigate('SignIn')
  } catch ({ response }) {
    Alert.alert('Sign-up Error', 'Error while signing up')
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest(types.SIGN_IN, signIn),
  takeLatest(types.SIGN_UP, signUp),
])
