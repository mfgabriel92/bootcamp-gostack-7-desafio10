import './config/reactotron'
import React from 'react'
import { StatusBar } from 'react-native'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { darken } from 'polished'
import { store, persistor } from './store'
import App from './App'

function Index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={darken(0.1, '#f7f7f7')}
          translucent
        />
        <App />
      </PersistGate>
    </Provider>
  )
}

export default Index
