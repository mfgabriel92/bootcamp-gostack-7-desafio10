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
} from './styles'
import { attendMeetup } from '../../store/meetup/actions'
import noBanner from '../../assets/no-banner.png'
import User from '../../components/User'

function Detail({ navigation }) {
  const { me } = useSelector(state => state.user)
  const meetup = navigation.getParam('meetup')
  const formattedDate = useMemo(
    () => format(parseISO(meetup.date), "MMMM do, yyyy ' | ' h:mm a"),
    [meetup.date]
  )
  const dispatch = useDispatch()

  function handleEdit() {
    navigation.navigate('Create', { meetup })
  }

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
        <Description>{meetup.description}</Description>
        <Date>{formattedDate}</Date>
      </Info>
      <Separator />
      <Footer>
        <View>
          {me.id === meetup.user.id
            ? !meetup.past && (
                <Button icon="pencil-alt" onPress={handleEdit}>
                  Edit
                </Button>
              )
            : !meetup.past && (
                <Button onPress={() => dispatch(attendMeetup(meetup.id))}>
                  I want to go!
                </Button>
              )}
        </View>
        <User user={meetup.user} />
      </Footer>
    </Container>
  )
}

export default withNavigation(Detail)
