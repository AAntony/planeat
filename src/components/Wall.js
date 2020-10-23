import React, { Component } from 'react'
import AddUserForm from './AddUserForm'
import LoginFB from './LoginFB'

import firebase from 'firebase/app'
import 'firebase/auth'
import base, { firebaseApp } from '../base'


class Wall extends Component {
  state = {
    chefs: {},
    chefName: this.props.chefName,
    chefNameAvalaible: false
  }

  handleChefNameAvailability = async () => {
    // A METTRE A JOUR
    const box = await base.fetch('/CHEF/USER', { context: this })
    if (!box.CHEFNAME) {
      await base.post(`/CHEF/USER/CHEFNAME/${this.state.chefName}`, {
        data: this.state.chefName
      })
    }
  }
  
  handleAddUser = () => {
    base.post('/CHEF/USER/CHEFNAME', {
      data: this.state.chefName,
      then(err){
        if(!err){
          console.log(err)
        }
      }
    })
    this.handleChefNameAvailability()
  }

  handleAuth = async authData => {
    const box = await base.fetch(this.props.chefName, { context: this })
    if (!box.chef) {
      await base.post(`${this.props.chefName}/chef`, {
        data: authData.user.uid
      })
    }

    this.setState({
      uid: authData.user.uid,
      chef: box.chef || authData.user.uid
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
    const { createUser } = this.props

    // Si l'utilisateur n'est pas connecté
    // if(!this.state.uid) {
    //   return <LoginFB authenticate={this.authenticate} />
    // }

    return (
      <>
        <AddUserForm
          chefName={this.state.chefName}
          createUser={createUser}
        />
      </>
    )
  }
}

export default Wall
