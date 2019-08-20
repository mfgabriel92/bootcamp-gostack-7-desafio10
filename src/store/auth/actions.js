import types from './types'

const signIn = (email, password) => ({
  type: types.SIGN_IN,
  payload: {
    email,
    password,
  },
})

const signInSuccess = (me, token) => ({
  type: types.SIGN_IN_SUCCESS,
  payload: {
    me,
    token,
  },
})

const signUp = (first_name, last_name, email, password) => ({
  type: types.SIGN_UP,
  payload: {
    first_name,
    last_name,
    email,
    password,
  },
})

const failure = () => ({
  type: types.FAILURE,
})

export { signIn, signInSuccess, signUp, failure }
