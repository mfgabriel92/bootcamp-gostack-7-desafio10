import React, { useState, useEffect } from 'react'
import { withNavigationFocus } from 'react-navigation'
import api from '../../services/api'
import { Container, MeetupsList } from './styles'
import Meetup from '../../components/Meetup'

function Meetups({ isFocused }) {
  const [meetups, setMeetups] = useState([])
  const [date, setDate] = useState(new Date())
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadMeetups() {
      const { data } = await api.get('meetups', {
        params: {
          date,
          limit: 10,
        },
      })

      setMeetups(data.meetups)
      setIsLoading(false)
    }

    if (isFocused) {
      loadMeetups()
    }
  }, [date, isFocused])

  return (
    <Container>
      <MeetupsList
        data={meetups}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <Meetup meetup={item} />}
      />
    </Container>
  )
}

export default withNavigationFocus(Meetups)
