import { Alert } from 'react-native'
import { call, put, all, takeLatest } from 'redux-saga/effects'
import { failure } from './actions'
import api from '../../services/api'
import navigation from '../../services/navigation'
import types from './types'

export function* createUpdateMeetup({ payload }) {
  try {
    const { id = null, banner, title, description, date, location } = payload
    let response

    if (id) {
      response = yield call(api.put, `meetups/${id}`, {
        title,
        description,
        date,
        location,
      })
    } else {
      response = yield call(api.post, 'meetups', {
        title,
        description,
        date,
        location,
      })
    }

    if (banner) {
      const image = new FormData()
      image.append('file', banner)
      yield call(api.put, `/meetups/${response.data.meetup.id}/banner`, image)
    }

    navigation.navigate('Meetups')
  } catch ({ response }) {
    Alert.alert('Create Error', 'Error while creating meetup')
    yield put(failure())
  }
}

export default all([takeLatest(types.CREATE_UPDATE_MEETUP, createUpdateMeetup)])
