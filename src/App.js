import React from 'react'
// CSS
import './App.css'

import Wall from './components/Wall'

import withFirebase from './hoc/withFirebase'

const App = ({ match, uid }) => {
  return (
    <Wall
      chefName={match.params.chefName}
      uid={uid}
    />
  )
}

const WrappedComponent = withFirebase(App)

export default WrappedComponent
