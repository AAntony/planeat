import React from 'react'

const withPlaceholder = WrappedComponent => (props) => (
  <WrappedComponent
    placeholder='Yo'
    {...props}
  />
)

export default withPlaceholder
