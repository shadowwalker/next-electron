// use this file as a template
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const styles = {
  root: {
    flexGrow: 1,
  }
}

class component extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render(){
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Photos
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

component.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(component)
