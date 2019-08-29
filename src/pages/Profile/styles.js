import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'
import Background from '../../components/Background'
import BaseInput from '../../components/BaseInput'
import BaseButton from '../../components/BaseButton'

export const Container = styled(Background)`
  align-items: center;
  height: 100%;
  padding: 10px;
`

export const Form = styled.SafeAreaView`
  width: 100%;
  flex-direction: column;
  background: #fff;
  padding: 20px;
  justify-content: flex-end;
  overflow: hidden;
`

export const Input = styled(BaseInput)`
  background: #f7f7f7;
  border: 1px solid #ececec;
  margin-bottom: 10px;
`

export const Button = styled(BaseButton)``

export const Separator = styled(LinearGradient).attrs({
  colors: ['#d99556', '#ca3201'],
  useAngle: true,
  angle: 135,
})`
  height: 1px;
  width: 100%;
  margin-bottom: 10px;
`
