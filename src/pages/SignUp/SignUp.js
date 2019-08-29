import React, { useState, useEffect, useRef } from 'react'
import { ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Form, Logo, Input, Button, Link, LinkText } from './styles'
import { signUp } from '../../store/auth/actions'
import Background from '../../components/Background'
import logo from '../../assets/logo.png'

function SignUp({ navigation }) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()
  const { isLoading } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    firstNameRef.current.focus()
  }, [])

  function handleOnSubmit() {
    dispatch(signUp(firstName, lastName, email, password, confirmPassword))
  }

  return (
    <Background>
      <Container>
        <Form>
          <ScrollView>
            <Logo source={logo} />
            <Input
              icon="user"
              placeholder="First name"
              autoCapitalize="words"
              returnKeyType="next"
              ref={firstNameRef}
              onSubmitEditing={() => lastNameRef.current.focus()}
              autoCorrect={false}
              value={firstName}
              onChangeText={setFirstName}
            />
            <Input
              icon="user"
              placeholder="Last name"
              autoCapitalize="words"
              returnKeyType="next"
              ref={lastNameRef}
              onSubmitEditing={() => emailRef.current.focus()}
              autoCorrect={false}
              value={lastName}
              onChangeText={setLastName}
            />
            <Input
              icon="envelope"
              keyboardType="email-address"
              placeholder="E-mail address"
              autoCapitalize="none"
              returnKeyType="next"
              ref={emailRef}
              onSubmitEditing={() => passwordRef.current.focus()}
              autoCorrect={false}
              value={email}
              onChangeText={setEmail}
            />
            <Input
              icon="lock"
              placeholder="Password"
              secureTextEntry
              autoCapitalize="none"
              returnKeyType="next"
              ref={passwordRef}
              onSubmitEditing={() => confirmPasswordRef.current.focus()}
              value={password}
              onChangeText={setPassword}
            />
            <Input
              icon="lock"
              placeholder="Confirm password"
              secureTextEntry
              autoCapitalize="none"
              ref={confirmPasswordRef}
              returnKeyType="send"
              onSubmitEditing={() => handleOnSubmit}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <Button icon="plus" onPress={handleOnSubmit} isLoading={isLoading}>
              Create
            </Button>
            <Link onPress={() => navigation.navigate('SignIn')}>
              <LinkText>Have an account? Enter now</LinkText>
            </Link>
          </ScrollView>
        </Form>
      </Container>
    </Background>
  )
}

export default SignUp
