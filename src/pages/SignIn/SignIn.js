import React, { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Form, Logo, Input, Button, Link, LinkText } from './styles'
import { signIn } from '../../store/auth/actions'
import Background from '../../components/Background'
import logo from '../../assets/logo.png'

function SignIn({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const passwordRef = useRef()
  const emailRef = useRef()
  const { isLoading } = useSelector(state => !!state.auth)
  const dispatch = useDispatch()

  function handleOnSubmit() {
    dispatch(signIn(email, password))
  }

  return (
    <Background>
      <Container>
        <Form>
          <Logo source={logo} />
          <Input
            icon="envelope"
            keyboardType="email-address"
            placeholder="E-mail address"
            ref={emailRef}
            autoCapitalize="none"
            returnKeyType="next"
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
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleOnSubmit}
            value={password}
            onChangeText={setPassword}
          />
          <Button icon="check" onPress={handleOnSubmit} isLoading={isLoading}>
            Enter
          </Button>
          <Link href onPress={() => navigation.navigate('SignUp')}>
            <LinkText>No account? Create one</LinkText>
          </Link>
        </Form>
      </Container>
    </Background>
  )
}

export default SignIn
