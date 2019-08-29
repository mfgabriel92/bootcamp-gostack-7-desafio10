import styled from 'styled-components/native'
import { Platform, TouchableOpacity } from 'react-native'
import BaseInput from '../../components/BaseInput'
import BaseButton from '../../components/BaseButton'

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 20px;
`

export const Form = styled.SafeAreaView`
  width: 100%;
  flex-direction: column;
  background: #fff;
  padding: 20px;
  justify-content: flex-end;
  overflow: hidden;
`

export const Logo = styled.Image`
  width: 92px;
  margin-bottom: 25px;
  align-self: center;
`

export const Input = styled(BaseInput)`
  background: #f7f7f7;
  border: 1px solid #ececec;
  margin-bottom: 10px;
`

export const Button = styled(BaseButton)``

export const Link = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
  height: 42px;
  background: transparent;
`
export const LinkText = styled.Text`
  font-weight: normal;
  font-size: 12px;
  color: #333;
`
