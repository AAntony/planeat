import React, { Component } from 'react'
import AddUserForm from './AddUserForm'
import LoginFB from './LoginFB'

import firebase from 'firebase/app'
import 'firebase/auth'
import base, { firebaseApp } from '../base'


class Wall extends Component {
  state = {
    chefName: this.props.chefName,
    chefNameAvalaible: false
  }

  // handleChefNameAvailability = async () => {
  //   const box = await base.fetch('/CHEF/USER', { context: this })
  //   if (!box.CHEFNAME) {
  //     await base.post(`/CHEF/USER/CHEFNAME/${this.state.chefName}`, {
  //       data: this.state.chefName
  //     })
  //   }
  // }

  render () {
    const { createUser } = this.props

    // Si l'utilisateur n'est pas connecté
    if(!this.state.uid) {
      return <LoginFB authenticate={this.authenticate} />
    }

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
