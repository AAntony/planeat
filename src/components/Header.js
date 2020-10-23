import React from 'react'
import { ColorContext } from './Color'

const Header = ({ chefName, colorHeader }) => {
  const formatChefName = chefName => /[aeiouyéè]/i.test(chefName[0]) ? `d'${chefName}` : `de ${chefName}`

  return (
    <ColorContext.Consumer>
      {context => (
        <header style={{ backgroundColor: context.state.color }}>
          <h1>La boîte à recette {formatChefName(chefName)}</h1>
        </header>
      )}
    </ColorContext.Consumer>
  )
}

export default Header
