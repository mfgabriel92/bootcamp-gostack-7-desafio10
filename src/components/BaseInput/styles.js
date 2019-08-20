import styled from 'styled-components/native'

export const Container = styled.View`
  padding: 0 15px;
  height: 42px;
  flex-direction: row;
  align-items: center;
`

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: '#333',
})`
  flex: 1;
  border: 0;
  color: #333;
  font-weight: bold;
  margin-left: 7px;
`
