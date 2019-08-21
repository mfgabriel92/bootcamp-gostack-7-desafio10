import React from 'react'
import { useSelector } from 'react-redux'
import {
  Container,
  Banner,
  UserAvatar,
  UserName,
  Menu,
  Separator,
  Item,
  ItemIcon,
  ItemPage,
} from './styles'
import noImage from '../../assets/no-user.png'

function DashboardLayout({ navigation }) {
  const { me } = useSelector(state => state.user)

  return (
    <Container>
      <Banner>
        <UserAvatar source={me.avatar ? me.avatar.path : noImage} />
        <UserName>
          {me.first_name} {me.middle_name} {me.last_name}
        </UserName>
      </Banner>
      <Menu>
        <Item>
          <ItemIcon name="calendar-alt" />
          <ItemPage>Meetups</ItemPage>
        </Item>
        <Item>
          <ItemIcon name="calendar-plus" />
          <ItemPage>My Meetups</ItemPage>
        </Item>
        <Item>
          <ItemIcon name="calendar-check" />
          <ItemPage>Meetups I am going</ItemPage>
        </Item>
        <Separator />
        <Item>
          <ItemIcon name="door-open" />
          <ItemPage>Logoff</ItemPage>
        </Item>
      </Menu>
    </Container>
  )
}

export default DashboardLayout
