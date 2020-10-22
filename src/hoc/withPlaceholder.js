import React from 'react'

const withPlaceholder = WrappedComponent => (props) => (
  <WrappedComponent
    placeholder='Saisissez votre nom de chef !'
    {...props}
  />
)

export default withPlaceholder
