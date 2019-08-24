import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Label, Container, Item } from './styles'

function BaseTimeInput({ label, value, onChange }) {
  const hours = [
    '07:00',
    '07:30',
    '08:00',
    '07:30',
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00',
    '20:30',
    '21:00',
    '21:30',
    '22:00',
    '22:30',
  ]

  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <Container
        selectedValue={value}
        onValueChange={itemValue => onChange(itemValue)}
      >
        {hours.map(hour => (
          <Item key={hour} label={hour} value={hour} />
        ))}
      </Container>
    </Wrapper>
  )
}

BaseTimeInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

BaseTimeInput.defaultProps = {
  label: '',
}

export default BaseTimeInput
