import React, { Component } from 'react'

import base from '../base'

const withFirebase = WrappedComponent => (
  class HOC extends Component {
    state = {
      chefName: this.props.match.params.chefName,
      users: {}
    }

    componentDidMount () {
      this.ref = base.syncState(`${this.state.chefName + '-' + Date.now()}`, {
        context: this,
        state: 'users'
      })
    }
  
    componentWillUnmount () {
      base.removeBinding(this.ref)
    }

    createUser = user => {
      const users = {...this.state.users}
      users['user'] = user
      this.setState({ users })
    }

    updateUser = (key, newUser) => {
      const users = {...this.state.users}
      users[key] = newUser
      this.setState({ users })
    }
      
    render () {
      return (
        <WrappedComponent
          createUser={this.createUser}
          updateUser={this.updateUser}
          {...this.props}
        />
      )
    }
  }

)

export default withFirebase
