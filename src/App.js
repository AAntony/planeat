import React from 'react'
// CSS
import './App.css'

import Wall from './components/Wall'

import withFirebase from './hoc/withFirebase'

const App = ({ match }) => {
  return (
    <Wall
      chefName={match.params.chefName}
    />
  )
}

const WrappedComponent = withFirebase(App)

export default WrappedComponent
