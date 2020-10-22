import React, { Component } from 'react'

class Wall extends Component {
  render () {
    return (
      <div> Hello {this.props.chefName} ! Your UID is {this.props.uid} !
      </div>
    )
  }
}

export default Wall
