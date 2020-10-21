import React from 'react'
import { Redirect } from 'react-router-dom'

import LoginFB from './LoginFB'

import firebase from 'firebase/app'
import 'firebase/auth'
import base, { firebaseApp } from '../base'

import withFirebase from '../hoc/withFirebase'
import withPlaceholder from '../hoc/withPlaceholder'

class Connexion extends React.Component {
  state = {
    uid: '',
    chefName: '',
    goToApp: false
  }

  // Si l'utilisateur a dejà un compte
  // componentDidMount() {
  //   firebase.auth().onAuthStateChanged(user => {
  //     if(user) {
  //       this.handleAuth({ user })
  //     }
  //   })
  // }

  handleAuth = async authData => {
    this.setState({
      uid: authData.user.uid,
      goToApp: true
    })
  }

  handleChange = event => {
    const chefName = event.target.value
    this.setState({ chefName })
  }

  goToApp = event => {
    event.preventDefault()
    this.setState({ goToApp: true })
  }

  handleAuthenticate = () => {
    const authProvider = new firebase.auth.FacebookAuthProvider()
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.handleAuth)
  }

  render () {
    if (this.state.goToApp) {
      return <Redirect push to={`/chef/${this.state.chefName}`} />
    }

    return (
      <div className='connexionBox'>
        <form className='connexion' onSubmit={this.goToApp} >
          <h1>Ma Boîte à Recettes</h1>
          <input
            type='text'
            value={this.state.chefName}
            onChange={this.handleChange}
            placeholder={this.props.placeholder}
            pattern='[A-Za-z-]{1,}'
            required />
          <div className='login'>
            <h2>Connecte toi pour créer tes recettes !</h2>
            <button onClick={this.handleAuthenticate} className='facebook-button'>Se connecter avec Facebook</button>
          </div>
          <p>Pas de caractères spéciaux.</p>
        </form>
      </div>
    )
  }
}

const WrappedComponent = withPlaceholder(Connexion)

export default WrappedComponent
