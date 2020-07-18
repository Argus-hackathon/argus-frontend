import withStyles from '@material-ui/core/styles/withStyles'
import PropTypes from 'prop-types'
import React from 'react'
import { render } from 'react-dom'
// import { Map, Marker, Popup, TileLayer, Circle, Tooltip, Polygon, CircleMarker, Rectangle } from 'react-leaflet'
import dashboardStyle from '../../assets/jss/material-dashboard-pro-react/views/dashboardStyle'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import './Statistics.css'



class Statistics extends React.Component {
      constructor() {
        super()
        this.state = {
          lat: 51.505,
          lng: -0.09,
          zoom: 13
        }
      }
    
      onClickCircle = () => {
        this.setState({ clicked: this.state.clicked + 1 })
      }

    render() {
        const position = [this.state.lat, this.state.lng];

        return (
            <Map center={position} zoom={this.state.zoom}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br/> Easily customizable.
              </Popup>
            </Marker>
          </Map>
          )
    }
}

Statistics.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(dashboardStyle)(Statistics)
