import React, { useMemo } from 'react'
import { withNavigation } from 'react-navigation'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { parseISO, format } from 'date-fns'
import { BASE_URL } from 'react-native-dotenv'
import {
  Container,
  Banner,
  Ribbon,
  Info,
  Title,
  Location,
  LocationIcon,
  LocationName,
  Description,
  Date,
  Separator,
} from './styles'
import User from '../User'
import noBanner from '../../assets/no-banner.png'

function Meetup({ meetup, navigation }) {
  const formattedDate = useMemo(
    () => format(parseISO(meetup.date), "MMMM do, yyyy ' | ' h:mm a"),
    [meetup.date]
  )

  function handleOnMeetupPress() {
    navigation.navigate('Detail', { meetup })
  }

  return (
    <Container onPress={handleOnMeetupPress}>
      <Banner
        source={
          meetup.banner
            ? { uri: `${BASE_URL}/files/${meetup.banner.name}` }
            : noBanner
        }
      />
      {meetup.past && <Ribbon />}
      <Info>
        <View>
          <Title>{meetup.title}</Title>
          <Location>
            <LocationIcon size={10} />
            <LocationName>{meetup.location}</LocationName>
          </Location>
        </View>
        <Description>{meetup.description}</Description>
        <Date>{formattedDate}</Date>
      </Info>
      <Separator />
      <User user={meetup.user} />
    </Container>
  )
}

Meetup.propTypes = {
  meetup: PropTypes.shape().isRequired,
}

export default withNavigation(Meetup)
