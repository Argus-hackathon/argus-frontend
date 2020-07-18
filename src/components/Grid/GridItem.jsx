import Grid from '@material-ui/core/Grid'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import React from 'react'

const style = {
    grid: {
        padding: '0 15px !important'
    }
}

function GridItem({...props}) {
    const {classes, children, className, ...rest} = props
    return (
        <Grid item {...rest} className={classes.grid + ' ' + className}>
            {children}
        </Grid>
    )
}

export default withStyles(style)(GridItem)
