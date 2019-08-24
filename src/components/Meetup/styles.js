import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome5'

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
  font-weight: bold;
  color: #333;
  font-size: 18px;
`

export const Location = styled.View`
  flex-direction: row;
  margin-top: 3px;
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
`

export const Description = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-style: italic;
  color: #999;
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
`
