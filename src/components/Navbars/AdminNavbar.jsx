import AppBar from '@material-ui/core/AppBar'
import Hidden from '@material-ui/core/Hidden'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Toolbar from '@material-ui/core/Toolbar'
// material-ui icons
import Menu from '@material-ui/icons/Menu'
import MoreVert from '@material-ui/icons/MoreVert'
import ViewList from '@material-ui/icons/ViewList'

import adminNavbarStyle
    from 'assets/jss/material-dashboard-pro-react/components/adminNavbarStyle.jsx'
import cx from 'classnames'
import Button from 'components/CustomButtons/Button.jsx'
import PropTypes from 'prop-types'
import React from 'react'
// core components
import AdminNavbarLinks from './AdminNavbarLinks'

function AdminNavbar({...props}) {
    const {classes, color, rtlActive, brandText} = props
    const appBarClasses = cx({
        [' ' + classes[color]]: color
    })
    const sidebarMinimize =
        classes.sidebarMinimize +
        ' ' +
        cx({
            [classes.sidebarMinimizeRTL]: rtlActive
        })
    return (
        <AppBar className={classes.appBar + appBarClasses}>
            <Toolbar className={classes.container}>
                <Hidden smDown implementation="css">
                    <div className={sidebarMinimize}>
                        {props.miniActive ? (
                            <Button
                                justIcon
                                round
                                color="white"
                                onClick={props.sidebarMinimize}
                            >
                                <ViewList className={classes.sidebarMiniIcon} />
                            </Button>
                        ) : (
                            <Button
                                justIcon
                                round
                                color="white"
                                onClick={props.sidebarMinimize}
                            >
                                <MoreVert className={classes.sidebarMiniIcon} />
                            </Button>
                        )}
                    </div>
                </Hidden>
                <div className={classes.flex}>
                    {/* Here we create navbar brand, based on route name */}
                    <Button href="#" className={classes.title}
                            color="transparent">
                        {brandText}
                    </Button>
                </div>
                <Hidden smDown implementation="css">
                    <AdminNavbarLinks rtlActive={rtlActive} />
                </Hidden>
                <Hidden mdUp implementation="css">
                    <Button
                        className={classes.appResponsive}
                        color="transparent"
                        justIcon
                        aria-label="open drawer"
                        onClick={props.handleDrawerToggle}
                    >
                        <Menu />
                    </Button>
                </Hidden>
            </Toolbar>
        </AppBar>
    )
}

AdminNavbar.propTypes = {
    classes: PropTypes.object.isRequired,
    color: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger']),
    rtlActive: PropTypes.bool,
    brandText: PropTypes.string
}

export default withStyles(adminNavbarStyle)(AdminNavbar)
