import React, { useMemo } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { parseISO, format } from 'date-fns'
import { BASE_URL } from 'react-native-dotenv'
import {
  Container,
  Banner,
  Info,
  Title,
  Location,
  LocationIcon,
  LocationName,
  Description,
  Date,
  Separator,
  User,
  UserAvatar,
  UserName,
} from './styles'
import noBanner from '../../assets/no-banner.png'
import noUser from '../../assets/no-user.png'

function Meetup({ meetup }) {
  const formattedDate = useMemo(
    () => format(parseISO(meetup.date), "MMMM do, yyyy ' | ' h:mm a"),
    [meetup.date]
  )

  return (
    <Container>
      <Banner
        source={
          meetup.banner
            ? { uri: `${BASE_URL}/files/${meetup.banner.name}` }
            : noBanner
        }
        loadingIndicatorSource={noBanner}
      />
      <Info>
        <View>
          <Title>{meetup.title}</Title>
          <Location>
            <LocationIcon size={10} />
            <LocationName>{meetup.location}</LocationName>
          </Location>
        </View>
        <Description>&quot;{meetup.description}&quot;</Description>
        <Date>{formattedDate}</Date>
      </Info>
      <Separator />
      <User>
        <UserAvatar
          source={meetup.user.avatar ? meetup.user.avatar.path : noUser}
        />
        <UserName>
          {meetup.user.first_name} {meetup.user.middle_name}{' '}
          {meetup.user.last_name}
        </UserName>
      </User>
    </Container>
  )
}

Meetup.propTypes = {
  meetup: PropTypes.shape().isRequired,
}

export default Meetup
