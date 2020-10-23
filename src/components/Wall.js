import React, { Component } from 'react'
import AddUserForm from './AddUserForm'

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

  render () {
    const { createUser } = this.props

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
