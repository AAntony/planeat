import React from 'react'
import { Redirect } from 'react-router-dom'

import Login from './Login'

import firebase from 'firebase/app'
import 'firebase/auth'
import base, { firebaseApp } from '../base'

import withFirebase from '../hoc/withFirebase'

class Connexion extends React.Component {
  state = {
    uid: ''
  }

  componentDidMount() {
    base.syncState('/chefs', {
      context: this,
      state: 'uid'
    })

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

const WrappedComponent = withFirebase(Connexion)

export default WrappedComponent
