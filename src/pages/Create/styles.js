import styled from 'styled-components/native'
import Background from '../../components/Background'
import BaseInput from '../../components/BaseInput'
import BaseButton from '../../components/BaseButton'

export const Container = styled(Background)`
  padding: 10px;
  flex-direction: column;
  height: 100%;
`

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

export const Form = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 20px;
`

export const Input = styled(BaseInput)`
  background: #f7f7f7;
  border: 1px solid #ececec;
  margin-bottom: 10px;
`

export const Textarea = styled(Input).attrs({
  multiline: true,
  numberOfLines: 5,
})``

export const DateTime = styled.View`
  flex-direction: row;
`

export const Button = styled(BaseButton)``
