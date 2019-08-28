import styled from 'styled-components/native'
import { SafeAreaView } from 'react-navigation'
import { darken } from 'polished'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome5'

export const Container = styled(SafeAreaView).attrs({
  forceInset: { top: 'always', horizontal: 'never' },
})`
  flex: 1;
`

export const Banner = styled(LinearGradient).attrs({
  colors: ['#d99556', '#ca3201'],
  useAngle: true,
  angle: 135,
})`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;
  background: ${darken(0.1, '#d99556')};
`

export const UserAvatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-bottom: 7px;
  background: #cecece;
`

export const UserName = styled.Text`
  color: #f7f7f7;
  font-size: 16px;
  font-family: 'OpenSans-Bold';
`

export const Menu = styled.ScrollView`
  padding: 20px 25px;
`

export const Item = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 20px 0;
`

export const Separator = styled.View`
  height: 1px;
  background: #ccc;
  opacity: 0.5;
  margin: 15px 0;
`

export const ItemIcon = styled(Icon).attrs(props => ({
  name: props.name,
  size: 16,
  color: '#777',
}))`
  margin-right: 20px;
`

export const ItemPage = styled.Text`
  font-size: 15px;
  color: #777;
  font-family: 'OpenSans-SemiBold';
`
