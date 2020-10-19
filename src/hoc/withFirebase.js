import React, { Component } from 'react'

import base from '../base'

const withFirebase = WrappedComponent => (
  class HOC extends Component {
    state = {
      uid: this.props.match.params.uid,
      chef: this.props.match.params.chef
    }

    componentDidMount () {
      this.ref = base.syncState(`${this.state.chef}/uid`, {
        context: this,
        state: 'uid'
      })
    }
  
    componentWillUnmount () {
      base.removeBinding(this.ref)
    }
  
    render () {
      console.log('uid: '+this.state.uid)
      console.log('chef: '+this.state.chef)

      return (
        <WrappedComponent
          {...this.props}
        />
      )
    }
  }

)

export default withFirebase
