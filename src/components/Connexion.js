import React from 'react'
import { Redirect } from 'react-router-dom'

import ConnexionForm from './ConnexionForm'

class Connexion extends React.Component {
  state = {
    chefName: '',
    goToApp: false
  }

  goToApp = event => {
    event.preventDefault()
    this.setState({ goToApp: true })
  }

  handleChange = event => {
    const chefName = event.target.value
    this.setState({ chefName })
  }

  render () {
    if (this.state.goToApp) {
      return (<Redirect push to={{ pathname: `/chef/${this.state.chefName}` }} />)
    }

    return (
      <ConnexionForm
        goToApp= {this.goToApp}
        chefName= {this.state.chefName}
        handleChange= {this.handleChange} />
    )
  }
}

export default Connexion
