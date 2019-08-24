import styled from 'styled-components/native'
import { Picker } from 'react-native'

export const Wrapper = styled.View`
  height: 42px;
  flex: 1;
`

export const Label = styled.Text`
  align-self: flex-start;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 15px;
`

export const Container = styled(Picker)`
  height: 44px;
  background: #f7f7f7;
  border: 1px solid #ececec;
  font-weight: bold;
`

export const Item = styled(Picker.Item)`
  font-weight: bold;
`
