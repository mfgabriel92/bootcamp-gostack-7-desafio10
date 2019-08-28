import React from 'react'
import PropTypes from 'prop-types'
import { Container, UserAvatar, UserName } from './styles'
import noUser from '../../assets/no-user.png'

function User({ user }) {
  return (
    <Container>
      <UserAvatar source={user.avatar ? user.avatar.path : noUser} />
      <UserName>
        {user.first_name} {user.middle_name || ''} {user.last_name}
      </UserName>
    </Container>
  )
}

User.propTypes = {
  user: PropTypes.shape().isRequired,
}

export default User
