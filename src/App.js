import React from 'react'
// CSS
import './App.css'

import Wall from './components/Wall'

import withFirebase from './hoc/withFirebase'

const App = ({ uid }) => {
  return (
    <Wall />
  )
}

const WrappedComponent = withFirebase(App)

export default WrappedComponent
