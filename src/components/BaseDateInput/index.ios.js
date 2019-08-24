import React, { useState, useMemo } from 'react'
import { DatePickerIOS } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { format } from 'date-fns'
import {
  Wrapper,
  Label,
  Container,
  DateButton,
  DateText,
  Picker,
} from './styles'

function DateInput({ label, date, onChange }) {
  const [opened, setOpened] = useState(false)
  const formattedDate = useMemo(() => {
    format(date, "do 'of' MMMM, YYYY")
  }, [date])

  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <Container>
        <DateButton onPress={() => setOpened(!opened)}>
          <Icon name="event" size={22} color="#fff" />
          <DateText>{formattedDate}</DateText>
        </DateButton>

        {opened && (
          <Picker>
            <DatePickerIOS
              date={date}
              onDateChange={onChange}
              minimumDate={new Date()}
              minuteInterval={60}
              mode="date"
            />
          </Picker>
        )}
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
