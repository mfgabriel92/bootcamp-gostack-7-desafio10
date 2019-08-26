import React, { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View } from 'react-native'
import { parseISO, format } from 'date-fns'
import { withNavigation } from 'react-navigation'
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
  Footer,
  Button,
  User,
  UserAvatar,
  UserName,
} from './styles'
import { attendMeetup } from '../../store/meetup/actions'
import noBanner from '../../assets/no-banner.png'
import noUser from '../../assets/no-user.png'

function Detail({ navigation }) {
  const { me } = useSelector(state => state.user)
  const meetup = navigation.getParam('meetup')
  const formattedDate = useMemo(
    () => format(parseISO(meetup.date), "MMMM do, yyyy ' | ' h:mm a"),
    [meetup.date]
  )
  const dispatch = useDispatch()

  return (
    <Container>
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
        <Description>&quot;{meetup.description}&quot;</Description>
        <Date>{formattedDate}</Date>
      </Info>
      <Separator />
      <Footer>
        {me.id === meetup.user.id
          ? !meetup.past && (
              <Button icon="pencil-alt" onPress={() => {}}>
                Edit
              </Button>
            )
          : !meetup.past && (
              <Button onPress={() => dispatch(attendMeetup(meetup.id))}>
                I want to go!
              </Button>
            )}
        <User>
          <UserAvatar
            source={meetup.user.avatar ? meetup.user.avatar.path : noUser}
          />
          <UserName>
            {meetup.user.first_name} {meetup.user.middle_name}{' '}
            {meetup.user.last_name}
          </UserName>
        </User>
      </Footer>
    </Container>
  )
}

export default withNavigation(Detail)
