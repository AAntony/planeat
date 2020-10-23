import React, { Component } from 'react'

class AddUserForm extends Component {
  state = {
    name: '',
    firstName: '',
    chefName: this.props.chefName
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = event => {
    event.preventDefault()
    const user = { ...this.state }
    // CREATE USER N'est pas une props reconnue
    this.props.createUser(user)
  }

  render () {
    return (
      <div className='card'>
        <form
          className='admin-form ajouter-recette' 
          onSubmit={this.handleSubmit}>
          <input value={this.state.name} type='text' name='name' onChange={this.handleChange} placeholder='Nom' />
          <input value={this.state.firstName} type='text' name='firstName' onChange={this.handleChange} placeholder='Prenom' />
          <input value={this.state.chefName} type='text' name='chefName' onChange={this.handleChange} placeholder='Nom de chef' />
          <button type='submit'>S'enregistrer</button>
        </form>
      </div>
    )
  }
}

export default AddUserForm
