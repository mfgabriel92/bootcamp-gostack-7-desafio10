import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Container, Label, TextInput } from './styles'

function BaseInput({ style, label, icon, ...rest }, ref) {
  return (
    <>
      {label && <Label>{label}</Label>}
      <Container style={style}>
        {icon && <Icon name={icon} size={14} color="#333" />}
        <TextInput ref={ref} {...rest} />
      </Container>
    </>
  )
}

BaseInput.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  label: PropTypes.string,
  icon: PropTypes.string,
}

BaseInput.defaultProps = {
  style: {},
  label: '',
  icon: null,
}

export default forwardRef(BaseInput)
