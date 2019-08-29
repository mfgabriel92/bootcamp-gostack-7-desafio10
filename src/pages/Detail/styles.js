import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Background from '../../components/Background'
import BaseButton from '../../components/BaseButton'
import done from '../../assets/ribbon-done.png'

export const Container = styled(Background)`
  display: flex;
  width: 100%;
  padding: 5px;
  position: relative;
`

export const Info = styled.View`
  padding: 5px;
  background: #fff;
`

export const Banner = styled.Image.attrs({
  resizeMode: 'cover',
})`
  height: 150px;
  width: 100%;
`

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-weight: bold;
  color: #333;
  font-size: 23px;
`

export const Location = styled.View`
  flex-direction: row;
  margin-top: 3px;
  margin-bottom: 20px;
`

export const LocationIcon = styled(Icon).attrs({
  name: 'map-marker-alt',
  color: '#999',
})`
  margin-right: 5px;
`

export const LocationName = styled.Text`
  font-size: 14px;
  color: #999;
`

export const Description = styled.Text`
  font-style: italic;
  color: #999;
  font-size: 16px;
  margin-bottom: 20px;
`

export const Date = styled.Text`
  font-size: 16px;
  color: #555;
`

export const Separator = styled.View`
  height: 1px;
  background: #eee;
`

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background: #fff;
  padding: 5px;
  align-items: center;
`

export const Button = styled(BaseButton).attrs({
  width: 90,
})`
  height: 30px;
`

export const Ribbon = styled.Image.attrs({
  source: done,
})`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 75px;
`
