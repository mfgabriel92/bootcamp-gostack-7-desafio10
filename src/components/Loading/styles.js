import styled from 'styled-components/native'
import { ActivityIndicator } from 'react-native'

export const Container = styled(ActivityIndicator).attrs({
  color: '#fff',
  size: 'large',
})`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`
