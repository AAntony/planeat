import React from 'react'

const ConnexionForm = ({ handleChange, goToApp, chefName }) => {
  return (
    <div className='connexionBox'>
      <form className='connexion' onSubmit={goToApp} >
        <h1>Ma Boîte à Recettes</h1>
        <input
          type='text'
          value={chefName}
          onChange={handleChange}
          placeholder='Saisissez votre nom de chef !'
          pattern='[A-Za-z-]{1,}'
          required
        />
        <button type='submit'>GO</button>
        <p>Pas de caractères spéciaux.</p>
      </form>
    </div>
  )
}

export default ConnexionForm
