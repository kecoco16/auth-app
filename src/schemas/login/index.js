// @flow
import * as yup from 'yup'

const initialValues = {
  email: '',
  password: ''
}

const schema = yup.object().shape({
  email: yup
    .string()
    .required('El campo correo es requerido.')
    .email('Formato de correo invalido.'),
  password: yup
    .string()
    .required('El campo contraseña es requerido.')
    .min(8, 'El minimo de caracteres son 8.')
})

export default {
  initialValues,
  schema
}
