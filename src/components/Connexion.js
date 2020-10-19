import React from 'react'
import { Redirect } from 'react-router-dom'

import Login from './Login'

import withPlaceholder from '../hoc/withPlaceholder'

class Connexion extends React.Component {
  state = {
    goToApp: false
  }

  goToApp = event => {
    event.preventDefault()
    this.setState({ goToApp: true })
  }

  handleChange = event => {
    const pseudo = event.target.value
    this.setState({ pseudo })
  }

  render () {
    if (this.state.goToApp) {
      return <Redirect push to={`/pseudo/${this.state.pseudo}`} />
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
