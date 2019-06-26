import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme: Object) => ({
  container: {
    paddingTop: theme.spacing(12),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    marginBottom: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  }
}))
