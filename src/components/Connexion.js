import React from 'react'
import { Redirect } from 'react-router-dom'

import Login from './Login'

import firebase from 'firebase/app'
import 'firebase/auth'
import base, { firebaseApp } from '../base'

import withPlaceholder from '../hoc/withPlaceholder'

class Connexion extends React.Component {
  state = {
    uid: null
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.handleAuth({ user })
      }
    })
  }

  handleAuth = async authData => {
    this.setState({
      uid: authData.user.uid
    })
  }

  authenticate = () => {
    const authProvider = new firebase.auth.FacebookAuthProvider()
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.handleAuth)
  }

  render () {
    console.log(this.state.uid)
    if (this.state.uid) {
      return <Redirect push to={`/chef/${this.state.uid}`} />
    }

    return (
      <div className='connexionBox'>
        <Login authenticate={this.authenticate} />
      </div>
    )
  }
}

const WrappedComponent = withPlaceholder(Connexion)

export default WrappedComponent
