import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'
import reactotronSaga from 'reactotron-redux-saga'
import env from './env'

if (__DEV__) {
  const tron = Reactotron.configure({
    host: env.IP,
  })
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect()

  tron.clear()

  console.tron = tron
}
