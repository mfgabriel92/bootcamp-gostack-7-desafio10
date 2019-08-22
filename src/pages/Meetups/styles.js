import styled from 'styled-components/native'
import Background from '../../components/Background'

export const Container = styled(Background)``

export const MeetupsList = styled.FlatList.attrs({
  contentContainerStyle: {
    showsVerticalScrollIndicator: false,
  },
  horizontal: false,
  numColumns: 2,
})``
