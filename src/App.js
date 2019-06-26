// @flow
import React from 'react'

// Router.
import Router from 'router'

// Store.
import { StoreProvider } from 'store'

function App() {
  return (
    <StoreProvider>
      <Router />
    </StoreProvider>
  )
}

export default App
