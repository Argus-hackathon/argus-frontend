import withStyles from '@material-ui/core/styles/withStyles'
import axios from 'axios'
import Button from 'components/CustomButtons/Button.jsx'
import PropTypes from 'prop-types'
import React from 'react'
import dashboardStyle
    from '../../assets/jss/material-dashboard-pro-react/views/dashboardStyle'

class Upload extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedFile: null
        }
    }

    onChangeHandler = event => {
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0
        })
    }

    onClickHandler = () => {
        const data = new FormData()
        data.append('file', this.state.selectedFile)

        axios.post('https://argus-uploader-api.herokuapp.com/upload/12345', data, {})
            .then(res => {
                console.log(res.statusText)
            })
    }

    render() {
        return (<>
            <input type="file" name="file" onChange={this.onChangeHandler} />
            <Button color="success"
                    onClick={this.onClickHandler}
            >
                Upload
            </Button>
        </>)
    }
}

Upload.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(dashboardStyle)(Upload)
