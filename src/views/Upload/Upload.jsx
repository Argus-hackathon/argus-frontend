import withStyles from '@material-ui/core/styles/withStyles'
import PropTypes from 'prop-types'
import React from 'react'
import dashboardStyle
    from '../../assets/jss/material-dashboard-pro-react/views/dashboardStyle'

class Upload extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (<></>)
    }
}

Upload.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(dashboardStyle)(Upload)
