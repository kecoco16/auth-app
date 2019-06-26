// @flow
import React from 'react'
import { Button } from '@material-ui/core'

// Components.
import { Drawer } from 'components'

// Utils.
import { auth } from 'utils'

function Home({ history }: { history: Object }) {
  const { email } = auth.get()
  return (
    <Drawer>
      <>
        <h3>Bienvenido {email}</h3>
        <Button
          fullWidth
          variant='contained'
          color='primary'
          onClick={() => {
            auth.clean()
            history.push('/')
          }}
        >
          Cerrar Sesión
        </Button>
      </>
    </Drawer>
  )
}

export default Home
