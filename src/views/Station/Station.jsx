import withStyles from '@material-ui/core/styles/withStyles'
import PropTypes from 'prop-types'
import React from 'react'
import axios from 'axios'
import { Map, TileLayer, Marker } from 'react-leaflet'
import dashboardStyle from '../../assets/jss/material-dashboard-pro-react/views/dashboardStyle'
import './Station.css'
import Table from 'components/Table/Table.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem'
import 'leaflet/dist/leaflet.css'

class Station extends React.Component {
    constructor() {
        super()
        this.state = {
            lat: 53.7665657,
            lng: 27.4436693,
            zoom: 14,
            station: {
                "id": "01-010-0002",
                "name": "УЧАСТОК ДЛЯ ГОЛОСОВАНИЯ № 2",
                "description": "(ул. Героев обороны Брестской крепости, 78, УО «Брестский государственный торгово-технологический колледж»)",
                "longitude": 23.652785,
                "latitude": 52.09133,
                "covering": 87,
                "presence": 300,
                "against": 40,
                "applied": 3
            },
        }
    }

    componentDidMount() {
        axios.get(`https://argus-uploader-api.herokuapp.com/poll_stations/${this.props.match.params.id}`)
            .then(res => {
                console.log(res.data)
                this.setState({ station: { 
                    ...res.data,
                    // video: `https://fairelection.blob.core.windows.net/main/${this.props.match.params.id}/result.mp4`
                    
                }});
            });
    }

    render() {
        const { station } = this.state;
        console.log(station && station.videos && station.videos[0]);

        return (
            <>
                <h3>{station.name}</h3>
                <h4>{station.description}</h4>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                        <Table
                            tableData={[
                                ['Явка', station.presence],
                                ['Голоса против', station.against],
                                ['Покрытие', `${station.covering}%`],
                                ['Видео', station && station.videos && <video preload autoPlay width="320" height="240" controls>
                                <source src={station.videos[0]} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>],
                            ]}
                        />
                        
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                        <Map     
                            style={{ height: "400px" }} 
                            center={{
                                lat: station.latitude,
                                lng: station.longitude,
                            }} zoom={this.state.zoom}
                        >
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
                                />
                            <Marker position={{
                                lat: station.latitude,
                                lng: station.longitude,
                                zoom: 7,
                            }}>
                            </Marker>
                        </Map>
                    </GridItem>
                </GridContainer>
          </>)
    }
}

Station.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(dashboardStyle)(Station)
