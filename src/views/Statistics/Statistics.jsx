import withStyles from '@material-ui/core/styles/withStyles'
import PropTypes from 'prop-types'
import React from 'react'
import dashboardStyle from '../../assets/jss/material-dashboard-pro-react/views/dashboardStyle'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import './Statistics.css'
import 'leaflet/dist/leaflet.css'
import Table from 'components/Table/Table.jsx'


class Statistics extends React.Component {
    constructor() {
        super()
        this.state = {
          lat: 53.7665657,
          lng: 27.4436693,
          zoom: 7,
          stations: [    {
            "id": "01-010-0002",
            "name": "УЧАСТОК ДЛЯ ГОЛОСОВАНИЯ № 2",
            "description": "(ул. Героев обороны Брестской крепости, 78, УО «Брестский государственный торгово-технологический колледж»)",
            "longitude": 23.652785,
            "latitude": 52.09133,
            "covering": 87,
            "presence": 300,
            "against": 40,
            "applied": 3
          }, {
            "id": "01-010-0006",
            "name": "УЧАСТОК ДЛЯ ГОЛОСОВАНИЯ № 6",
            "description": "(ул. Смирнова, 63, ГУО «Средняя школа № 5 г. Бреста»)",
            "longitude": 23.646314,
            "latitude": 52.105589,
            "covering": 87,
            "presence": 300,
            "against": 40,
            "applied": 2
          }, {
            "id": "06-124-0010",
            "name": "Участок для голосования № 10",
            "description": "ул. Центральная, д. 61а, Березовский сельский Дом культуры.",
            "longitude": 28.80236,
            "latitude": 52.815958,
            "covering": 87,
            "presence": 300,
            "against": 40,
            "applied": 0
          }, {
            "id": "07-003-0024",
            "name": "УЧАСТОК ДЛЯ ГОЛОСОВАНИЯ No 24",
            "description": "ул. Железнодорожная, 124, государственное учреждение образования «Средняя школа № 83 г.Минска им. Жукова Г.К.»",
            "longitude": 27.505084,
            "latitude": 53.876998,
            "covering": 87,
            "presence": 300,
            "against": 40,
            "applied": 2
          }]
        }
      }
    
    onClickCircle = () => {
        this.setState({ clicked: this.state.clicked + 1 })
    }

    render() {
        const position = [this.state.lat, this.state.lng];
        
        return (
            <Map     
              style={{ height: "calc(100vh - 160px)" }} 
              center={position} zoom={this.state.zoom}
            >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            {this.state.stations.map(station => <Marker position={{
                lat: station.latitude,
                lng: station.longitude,
                zoom: 7,
            }}>
              <Popup>
                <h4><a href={`/admin/stations/${station.id}`}>{station.name}</a></h4>
                <p>{station.description}</p>
                <Table
                    // tableHead={['Name', 'Salary']}
                    tableData={[
                        ['Явка', station.presence],
                        ['Голоса против', station.against],
                        ['Покрытие', `${station.covering}%`],
                    ]}
                />
              </Popup>
            </Marker>)}
            
          </Map>
          )
    }
}

Statistics.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(dashboardStyle)(Statistics)
