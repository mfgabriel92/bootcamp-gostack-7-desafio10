import React, { useState, useEffect, useMemo } from 'react'
import { withNavigationFocus } from 'react-navigation'
import { format, addDays, subDays } from 'date-fns'
import api from '../../services/api'
import {
  Container,
  Header,
  Day,
  LeftArrow,
  RightArrow,
  MeetupsList,
  EmptyText,
} from './styles'
import Meetup from '../../components/Meetup'
import Loading from '../../components/Loading'

function Meetups({ isFocused }) {
  const [meetups, setMeetups] = useState([])
  const [date, setDate] = useState(new Date())
  const [isLoading, setIsLoading] = useState(true)
  const formattedDate = useMemo(() => format(date, "do 'of' MMMM"), [date])

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

  useEffect(() => {
    setIsLoading(true)
  }, [date])

  function decreaseDate() {
    setDate(subDays(date, 1))
  }

  function increaseDate() {
    setDate(addDays(date, 1))
  }

  if (isLoading) {
    return (
      <Container>
        <Loading />
      </Container>
    )
  }

  return (
    <Container>
      <Header>
        <LeftArrow onPress={decreaseDate} />
        <Day>Meet-ups on the {formattedDate}</Day>
        <RightArrow onPress={increaseDate} />
      </Header>
      {!isLoading && meetups.length === 0 ? (
        <EmptyText>No meetups for today</EmptyText>
      ) : (
        <MeetupsList
          data={meetups}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Meetup meetup={item} />}
        />
      )}
    </Container>
  )
}

export default withNavigationFocus(Meetups)
