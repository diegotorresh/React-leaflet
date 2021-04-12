import React, {useState, useEffect} from 'react'

import {MapContainer, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import Markers from './Markers'
import {tiendas} from '../assets/data.json'
import {useLocation, useHistory} from 'react-router-dom'

const MapView = () => {

    const [state, setState] = useState({
        currentLocation: {lat:'-11.9962761',lng:'-77.0125425'},
        zoom: 13
    });

    const location= useLocation();
    const history = useHistory();

    useEffect(() => {
        if ( location.state.latitude && location.state.longitude) {
            const currentLocation = {
                lat: location.state.latitude,
                lng: location.state.longitude
            }
            setState({...state, currentLocation})

            history.replace({pathname: '/map', state: {}})
        }
    }, []);

    return (
    <MapContainer center={state.currentLocation} zoom={state.zoom}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
        
        <Markers tiendas={tiendas}/>
    </MapContainer>
    )
}

export default MapView