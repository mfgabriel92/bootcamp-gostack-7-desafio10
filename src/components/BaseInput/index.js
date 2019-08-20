import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Container, TextInput } from './styles'

function BaseInput({ style, icon, ...rest }, ref) {
  return (
    <Container style={style}>
      {icon && <Icon name={icon} size={14} color="#333" />}
      <TextInput ref={ref} {...rest} />
    </Container>
  )
}

BaseInput.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  icon: PropTypes.string,
}

BaseInput.defaultProps = {
  style: {},
}

export default forwardRef(BaseInput)
