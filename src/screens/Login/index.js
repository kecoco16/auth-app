// @flow
import React, { useState } from 'react'
import {
  Avatar,
  Button,
  TextField,
  Typography,
  Container,
  InputAdornment,
  IconButton
} from '@material-ui/core'
import { LockOutlined, Visibility, VisibilityOff } from '@material-ui/icons'
import useFormal from '@kevinwolf/formal-web'

// Components.
import { LoadingButton } from 'components'

// Schemas.
import { loginScheme } from 'schemas'

// Styles.
import { loginStyle } from 'styles'

// Utils.
import { auth } from 'utils'

// Api.
import { fetch } from 'api'

const { initialValues, schema } = loginScheme

function Login({ history }: { history: Object }) {
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const classes = loginStyle()
  const formal = useFormal(initialValues, {
    schema,
    onSubmit: async (values: Object) => {
      try {
        setLoading(true)
        const response = await fetch.post('login', values)
        setLoading(false)
        auth.set(response)
        history.push('/home')
      } catch (err) {
        setLoading(false)
      }
    }
  })

  return (
    <Container maxWidth='xs' className={classes.container}>
      <Avatar className={classes.avatar}>
        <LockOutlined />
      </Avatar>
      <Typography component='h1' variant='h5'>
        Inicia Sesión
      </Typography>
      <form {...formal.getFormProps()}>
        <TextField
          id='email'
          variant='outlined'
          margin='normal'
          fullWidth
          label='Correo'
          autoComplete='off'
          error={formal.getFieldProps('email').error}
          helperText={formal.getFieldProps('email').error}
          {...formal.getFieldProps('email')}
        />

        <TextField
          id='password'
          variant='outlined'
          margin='normal'
          fullWidth
          label='Contraseña'
          type={showPassword ? 'text' : 'password'}
          autoComplete='current-password'
          error={formal.getFieldProps('password').error}
          helperText={formal.getFieldProps('password').error}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton
                  aria-label='Toggle password visibility'
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            )
          }}
          {...formal.getFieldProps('password')}
        />
        <LoadingButton loading={loading}>
          <Button
            disabled={loading}
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
          >
            Iniciar Sesión
          </Button>
        </LoadingButton>
      </form>
    </Container>
  )
}

export default Login
