import styled from 'styled-components/native'

export const Wrapper = styled.View`
  flex-direction: column;
`

export const Container = styled.View`
  width: 100%;
`

export const Label = styled.Text`
  align-self: flex-start;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 15px;
`

export const DateButton = styled.TouchableOpacity`
  padding: 0 15px;
  height: 44px;
  flex-direction: row;
  align-items: center;
  background: #f7f7f7;
  border: 1px solid #ececec;
  margin-bottom: 10px;
`

export const DateText = styled.Text`
  font-size: 14px;
  color: #333;
  margin-left: 15px;
  font-weight: bold;
`

export const Picker = styled.View`
  padding: 15px 30px;
  margin-top: 30px;
`
