import React from 'react'
import { useSelector } from 'react-redux'
import createRouter from './routes'
import navigation from './services/navigation'

function App() {
  const { isSigned } = useSelector(state => state.auth)
  const Routes = createRouter(isSigned)

  return <Routes ref={ref => navigation.setNavigator(ref)} />
}

export default App
