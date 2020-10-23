import React from 'react'
// CSS
import './App.css'

import ColorContext from './components/Color'

import Wall from './components/Wall'
import Header from './components/Header'

import PropTypes from 'prop-types'

import withFirebase from './hoc/withFirebase'

const App = ({ match, createUser, colorHeader }) => {
  return (
    <ColorContext>
      <Header
        colorHeader={colorHeader}
        chefName={match.params.chefName}
      />
      <Wall
        createUser={createUser}
        chefName={match.params.chefName}
      />
    </ColorContext>
  )
}

App.propTypes = {
  createUser: PropTypes.func.isRequired,
  colorHeader: PropTypes.string,
  match: PropTypes.object.isRequired
}

const WrappedComponent = withFirebase(App)

export default WrappedComponent
