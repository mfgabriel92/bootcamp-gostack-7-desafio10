import styled from 'styled-components/native'

export const Banner = styled.Image.attrs({
  resizeMode: 'cover',
})`
  height: 180px;
  width: 100%;
  margin-bottom: 20px;
`

export const PickImage = styled.TouchableOpacity`
  height: 180px;
  width: 100%;
  background: #eee;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`
