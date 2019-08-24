import React, { useMemo } from 'react'
import { DatePickerAndroid, Alert } from 'react-native'
import { isBefore, format } from 'date-fns'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Wrapper, Label, Container, DateButton, DateText } from './styles'

function DateInput({ label, date, onChange }) {
  const formattedDate = useMemo(() => format(date, "do 'of' MMMM, yyyy"), [
    date,
  ])

  async function handleOpenPicker() {
    const { action, year, month, day } = await DatePickerAndroid.open({
      mode: 'spinner',
      date,
    })

    if (action === DatePickerAndroid.dateSetAction) {
      const chosenDate = new Date(year, month, day)

      if (isBefore(chosenDate, new Date())) {
        Alert.alert('Error', 'Dates before today is not allowed')
        return
      }

      onChange(chosenDate)
    }
  }

  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <Container>
        <DateButton onPress={handleOpenPicker}>
          <Icon name="event" size={22} color="#333" />
          <DateText>{formattedDate}</DateText>
        </DateButton>
      </Container>
    </Wrapper>
  )
}

DateInput.propTypes = {
  label: PropTypes.string,
  date: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
}

DateInput.defaultProps = {
  label: '',
}

export default DateInput
