import React, { useState, useEffect, useRef } from 'react'
import { ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../../store/user/actions'
import { Container, Form, Input, Button, Separator } from './styles'
import BaseImagePicker from '../../components/BaseImagePicker'

function Profile() {
  const me = useSelector(state => state.user.me)
  const [avatar, setAvatar] = useState(me.avatar)
  const [firstName, setFirstName] = useState(me.first_name)
  const [middleName, setMiddleName] = useState(me.middle_name || '')
  const [lastName, setLastName] = useState(me.last_name)
  const [email, setEmail] = useState(me.email)
  const [oldPassword, setOldPassword] = useState(null)
  const [password, setPassword] = useState(null)
  const [confirmPassword, setConfirmPassword] = useState(null)
  const dispatch = useDispatch()
  const middleNameRef = useRef()
  const lastNameRef = useRef()
  const emailRef = useRef()
  const oldPasswordRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()

  useEffect(() => {
    setOldPassword(null)
    setPassword(null)
    setConfirmPassword(null)
  }, [me])

  function handleOnSubmit() {
    dispatch(
      updateUser({
        avatar,
        first_name: firstName,
        middle_name: middleName,
        last_name: lastName,
        email,
        oldPassword,
        password,
        confirmPassword,
      })
    )
  }

  return (
    <Container>
      <Form>
        <ScrollView>
          <BaseImagePicker
            type="avatar"
            onSelect={setAvatar}
            previousImage={avatar}
          />
          <Input
            icon="user"
            autoCorrect={false}
            autoCapitalize="words"
            placeholder="First name"
            returnKeyType="next"
            value={firstName}
            onChangeText={setFirstName}
            onSubmitEditing={() => middleNameRef.current.focus()}
          />
          <Input
            icon="user"
            autoCorrect={false}
            autoCapitalize="words"
            placeholder="Middle name"
            returnKeyType="next"
            ref={middleNameRef}
            value={middleName}
            onChangeText={setMiddleName}
            onSubmitEditing={() => lastNameRef.current.focus()}
          />
          <Input
            icon="user"
            autoCorrect={false}
            autoCapitalize="words"
            placeholder="Last name"
            returnKeyType="next"
            ref={lastNameRef}
            value={lastName}
            onChangeText={setLastName}
            onSubmitEditing={() => emailRef.current.focus()}
          />
          <Input
            icon="envelope"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Your e-mail"
            returnKeyType="next"
            value={email}
            ref={emailRef}
            onChangeText={setEmail}
            onSubmitEditing={() => oldPasswordRef.current.focus()}
          />

          <Separator />

          <Input
            icon="lock"
            placeholder="Old password"
            secureTextEntry
            returnKeyType="next"
            value={oldPassword}
            ref={oldPasswordRef}
            onSubmitEditing={() => passwordRef.current.focus()}
            onChangeText={setOldPassword}
          />
          <Input
            icon="lock"
            placeholder="New password"
            secureTextEntry
            returnKeyType="next"
            value={password}
            ref={passwordRef}
            onSubmitEditing={() => confirmPasswordRef.current.focus()}
            onChangeText={setPassword}
          />
          <Input
            icon="lock"
            placeholder="New password (again)"
            secureTextEntry
            returnKeyType="send"
            value={confirmPassword}
            ref={confirmPasswordRef}
            onChangeText={setConfirmPassword}
            onSubmitEditing={handleOnSubmit}
          />

          <Button icon="pencil-alt" onPress={handleOnSubmit}>
            Update
          </Button>
        </ScrollView>
      </Form>
    </Container>
  )
}

export default Profile
