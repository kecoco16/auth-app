// @flow
import React from 'react'
import { Container } from '@material-ui/core'

function NoMatch({ location }: { location: Object }) {
  return (
    <Container maxWidth='xs'>
      <h1>La ruta {location.pathname} no existe.</h1>
    </Container>
  )
}

export default NoMatch
