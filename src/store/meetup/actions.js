import types from './types'

const createUpdateMeetup = (
  id,
  banner,
  title,
  description,
  date,
  location
) => ({
  type: types.CREATE_UPDATE_MEETUP,
  payload: {
    id,
    banner,
    title,
    description,
    date,
    location,
  },
})

const attendMeetup = id => ({
  type: types.ATTEND_MEETUP,
  payload: {
    id,
  },
})

const failure = () => ({
  type: types.FAILURE,
})

export { createUpdateMeetup, attendMeetup, failure }
