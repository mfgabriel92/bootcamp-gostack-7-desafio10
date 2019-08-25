import React, { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setHours, setMinutes, setSeconds } from 'date-fns'
import BaseImagePicker from '../../components/BaseImagePicker'
import BaseDateInput from '../../components/BaseDateInput'
import BaseTimeInput from '../../components/BaseTimeInput'
import { Container, Form, Input, Textarea, DateTime, Button } from './styles'
import { createUpdateMeetup } from '../../store/meetup/actions'

function Create() {
  const [banner, setBanner] = useState(null)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState('12:00')
  const [location, setLocation] = useState('')
  const titleRef = useRef()
  const descriptionRef = useRef()
  const locationRef = useRef()
  const { isLoading } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  function handleOnSubmit() {
    const [h, m] = time.split(':')
    const dateTime = setSeconds(setMinutes(setHours(date, h), m), 0)

    dispatch(
      createUpdateMeetup(null, banner, title, description, dateTime, location)
    )
  }

  return (
    <Container>
      <Form>
        <BaseImagePicker onSelect={setBanner} />
        <Input
          label="Event title"
          icon="calendar"
          ref={titleRef}
          returnKeyType="next"
          onSubmitEditing={() => descriptionRef.current.focus()}
          value={title}
          onChangeText={setTitle}
        />
        <Textarea
          label="Event description"
          icon="question"
          ref={descriptionRef}
          returnKeyType="next"
          value={description}
          onChangeText={setDescription}
        />
        <DateTime>
          <BaseDateInput label="Date" date={date} onChange={setDate} />
          <BaseTimeInput label="Time" value={time} onChange={setTime} />
        </DateTime>
        <Input
          label="Location"
          icon="map-marker-alt"
          ref={locationRef}
          returnKeyType="next"
          onSubmitEditing={() => descriptionRef.current.focus()}
          value={location}
          onChangeText={setLocation}
        />
        <Button icon="plus" onPress={handleOnSubmit} isLoading={isLoading}>
          Create
        </Button>
      </Form>
    </Container>
  )
}

export default Create
