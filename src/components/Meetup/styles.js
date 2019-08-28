import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome5'
import done from '../../assets/ribbon-done.png'

export const Container = styled(RectButton)`
  margin: 5px;
  background: #fff;
  flex: 1;
  height: 275px;
`

export const Info = styled.View`
  padding: 7px;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`

export const Banner = styled.Image.attrs({
  resizeMode: 'cover',
})`
  height: 130px;
  width: 100%;
`

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  color: #333;
  font-size: 18px;
  font-family: 'OpenSans-Bold';
`

export const Location = styled.View`
  flex-direction: row;
  margin-top: 3px;
  font-family: 'OpenSans-Regular';
`

export const LocationIcon = styled(Icon).attrs({
  name: 'map-marker-alt',
  color: '#999',
})`
  margin-right: 5px;
`

export const LocationName = styled.Text`
  font-size: 12px;
  color: #999;
  font-family: 'OpenSans-Regular';
`

export const Description = styled.Text.attrs({
  numberOfLines: 3,
})`
  color: #999;
  font-family: 'OpenSans-RegularItalic';
`

export const Date = styled.Text`
  font-size: 13px;
  color: #555;
`

export const Separator = styled.View`
  height: 1px;
  background: #eee;
`

export const User = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 5px 20px;
`

export const UserAvatar = styled.Image`
  height: 15px;
  width: 15px;
  border-radius: 15px;
`

export const UserName = styled.Text`
  font-size: 11px;
  margin-left: 10px;
  font-family: 'OpenSans-Regular';
`

export const Ribbon = styled.Image.attrs({
  source: done,
})`
  position: absolute;
  right: 0;
  width: 75px;
`
