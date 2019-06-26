import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import { green } from '@material-ui/core/colors'

const useStyles = makeStyles((theme: Object) => ({
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative'
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12
  }
}))

export default function CircularIntegration({
  loading,
  children
}: {
  loading: Boolean,
  children: React.Node
}) {
  const classes = useStyles()

  return (
    <div className={classes.wrapper}>
      {children}
      {loading && (
        <CircularProgress size={24} className={classes.buttonProgress} />
      )}
    </div>
  )
}
