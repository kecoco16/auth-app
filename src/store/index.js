// @flow
import React, { createContext, useState } from 'react'
const Store = createContext()
const { Provider, Consumer } = Store

function StoreProvider({ children }: { children: React.Node }) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [user, setUser] = useState(null)

  return (
    <Provider
      value={{
        data: {
          loading,
          error,
          user
        },
        setLoading,
        setError,
        setUser
      }}
    >
      {children}
    </Provider>
  )
}

export { StoreProvider, Consumer as StoreConsumer, Store }
