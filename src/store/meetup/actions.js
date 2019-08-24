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

const failure = () => ({
  type: types.FAILURE,
})

export { createUpdateMeetup, failure }
