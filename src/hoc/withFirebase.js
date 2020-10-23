import React, { Component } from 'react'

import base from '../base'

const withFirebase = WrappedComponent => (
  class HOC extends Component {
    state = {
      chefName: this.props.match.params.chefName,
      users: {}
    }

    componentDidMount () {
      this.ref = base.syncState(`${this.state.chefName}`, {
        context: this,
        state: 'users'
      })
    }
  
    componentWillUnmount () {
      base.removeBinding(this.ref)
    }

    createUser = user => {
      const users = {...this.state.users}
      users[`user-${Date.now()}`] = user
      this.setState({ users })
    }
      
    render () {
      return (
        <WrappedComponent
          createUser={this.createUser}
          {...this.props}
        />
      )
    }
  }

)

export default withFirebase
