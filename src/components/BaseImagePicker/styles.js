import styled from 'styled-components/native'

const BaseImage = styled.Image.attrs({
  resizeMode: 'cover',
})``

const BasePicker = styled.TouchableOpacity`
  background: #eee;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`

export const Banner = styled(BaseImage)`
  height: 180px;
  width: 100%;
`

export const PickBanner = styled(BasePicker)`
  height: 180px;
  width: 100%;
`

export const Avatar = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
`

export const PickAvatar = styled(BasePicker)`
  align-self: center;
  width: 120px;
  height: 120px;
  border-radius: 60px;
`
