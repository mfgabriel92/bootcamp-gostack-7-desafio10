import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import LinearGradient from 'react-native-linear-gradient'
import { RectButton } from 'react-native-gesture-handler'

export const Wrapper = styled(LinearGradient).attrs({
  colors: ['#ca3201', '#d99556'],
  useAngle: true,
  angle: -135,
})`
  width: 100%;
`

export const ButtonIcon = styled(Icon).attrs(props => ({
  name: props.icon,
  size: 14,
  color: '#fff',
}))`
  display: ${props => (props.icon ? 'flex' : 'none')};
  margin-right: 7px;
`

export const Button = styled(RectButton).attrs(props => ({
  enabled: !props.disabled,
}))`
  flex-direction: row;
  height: 42px;
  align-items: center;
  justify-content: center;
  opacity: ${props => (props.disabled ? 0.5 : 1)};
`

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
`
