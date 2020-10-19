import React, { Component } from 'react'

import base from '../base'

import recettes from '../recettes'

const withFirebase = WrappedComponent => (
  class HOC extends Component {
    state = {
      pseudo: this.props.match.params.pseudo,
      recettes: {}
    }

    componentDidMount () {
      this.ref = base.syncState(`${this.state.pseudo}/recettes`, {
        context: this,
        state: 'recettes'
      })
    }
  
    componentWillUnmount () {
      base.removeBinding(this.ref)
    }

    createRecette = recette => {
      const recettes = {...this.state.recettes}
      recettes[`recette-${Date.now()}`] = recette
      this.setState({ recettes })
    }
  
    majRecette = (key, newRecette) => {
      const recettes = {...this.state.recettes}
      recettes[key] = newRecette
      this.setState({ recettes })
    }
  
    supprimerRecette = key => {
      const recettes = {...this.state.recettes}
      recettes[key] = null
      this.setState({ recettes })
    }
  
    handleLoadRecettesExemple = () => this.setState({ recettes })

    render () {
      return (
        <WrappedComponent
          recettes={this.state.recettes}
          createRecette={this.createRecette}
          majRecette={this.majRecette}
          supprimerRecette={this.supprimerRecette}
          handleLoadRecettesExemple={this.handleLoadRecettesExemple}
          {...this.props}
        />
      )
    }
  }

)

export default withFirebase
