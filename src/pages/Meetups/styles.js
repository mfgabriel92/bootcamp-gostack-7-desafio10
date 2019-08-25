import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Background from '../../components/Background'

export const Container = styled(Background)`
  width: 100%;
  display: flex;
`

export const Header = styled.View`
  margin: 20px 0;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Day = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  margin: 0 15px;
`
export const LeftArrow = styled(Icon).attrs({
  name: 'chevron-circle-left',
  size: 24,
  color: '#fff',
})``

export const RightArrow = styled(Icon).attrs({
  name: 'chevron-circle-right',
  size: 24,
  color: '#fff',
})``

export const MeetupsList = styled.FlatList.attrs({
  contentContainerStyle: {
    showsVerticalScrollIndicator: false,
  },
  horizontal: false,
  numColumns: 2,
})``

export const EmptyText = styled.Text`
  text-align: center;
  margin-top: 25px;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`
