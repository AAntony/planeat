import React from 'react'

const LoginFB = ({ authenticate }) => {
  return (
    <div className='login'>
      <h2>Connecte toi pour créer tes recettes !</h2>
      <button onClick={authenticate} className='facebook-button'>Se connecter avec Facebook</button>
    </div>
  )
}

export default LoginFB
