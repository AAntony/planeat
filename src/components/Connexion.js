import React from 'react'
import { Redirect } from 'react-router-dom'

import Login from './Login'

import firebase from 'firebase/app'
import 'firebase/auth'
import base, { firebaseApp } from '../base'

import withPlaceholder from '../hoc/withPlaceholder'

class Connexion extends React.Component {
  state = {
    uid: null,
    chef: null,
    goToApp: false
  }

  goToApp = event => {
    event.preventDefault()
    this.setState({ goToApp: true })
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.handleAuth({ user })
      }
    })
  }

  handleAuth = async authData => {
    // const box = await base.fetch(this.props.pseudo, { context: this })
    // if (!box.chef) {
    //   await base.post(`${this.props.pseudo}/chef`, {
    //     data: authData.user.uid
    //   })
    // }

    console.log(authData)

    // A étudier
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

  handleChange = event => {
    const pseudo = event.target.value
    this.setState({ pseudo })
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
