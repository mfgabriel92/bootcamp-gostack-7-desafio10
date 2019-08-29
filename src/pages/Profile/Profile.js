import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Form, Input, Button, Separator } from './styles'

function Profile() {
  const me = useSelector(state => state.user.me)
  const [firstName, setFirstName] = useState(me.first_name)
  const [middleName, setMiddleName] = useState(me.middle_name)
  const [lastName, setLastName] = useState(me.last_name)
  const [email, setEmail] = useState(me.email)
  const [oldPass, setOldPass] = useState(null)
  const [newPass, setNewPass] = useState(null)
  const [confPass, setConfPass] = useState(null)
  const dispatch = useDispatch()
  const emailRef = useRef()
  const oldPassRef = useRef()
  const newPassRef = useRef()
  const confPassRef = useRef()

  useEffect(() => {
    setOldPass(null)
    setNewPass(null)
    setConfPass(null)
  }, [me])

  // function handleOnSubmit() {
  //   dispatch(updateUser({ name, email, oldPass, newPass, confPass }))
  // }

  return (
    <Container>
      <Form>
        <Input
          icon="user"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="First name"
          returnKeyType="next"
          value={firstName}
          onChangeText={setFirstName}
          onSubmitEditing={() => emailRef.current.focus()}
        />
        <Input
          icon="user"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Middle name"
          returnKeyType="next"
          value={middleName}
          onChangeText={setMiddleName}
          onSubmitEditing={() => emailRef.current.focus()}
        />
        <Input
          icon="user"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Last name"
          returnKeyType="next"
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
          returnKeyType="send"
          value={email}
          ref={emailRef}
          onChangeText={setEmail}
        />

        <Separator />

        <Input
          icon="lock"
          placeholder="Old password"
          secureTextEntry
          returnKeyType="next"
          value={oldPass}
          ref={oldPassRef}
          onSubmitEditing={() => newPassRef.current.focus()}
          onChangeText={setOldPass}
        />
        <Input
          icon="lock"
          placeholder="New password"
          secureTextEntry
          returnKeyType="next"
          value={newPass}
          ref={newPassRef}
          onSubmitEditing={() => confPassRef.current.focus()}
          onChangeText={setNewPass}
        />
        <Input
          icon="lock"
          placeholder="New password (again)"
          secureTextEntry
          returnKeyType="send"
          value={confPass}
          ref={confPassRef}
          onChangeText={setConfPass}
        />

        <Button icon="pencil-alt" onPress={() => {}}>
          Update
        </Button>
      </Form>
    </Container>
  )
}

export default Profile
