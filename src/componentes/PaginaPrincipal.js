import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

const PaginaPrincipal = () => {
    const [state, setState] = useState({
        longitude:0,
        latitude:0,
    })

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            function (position){
                setState({
                    longitude: position.coords.longitude,
                    latitude: position.coords.latitude
                })
            },
            function(error){
                console.log(error)
            },
            {
                enableHighAcurracy: true
            }
        );
    });
    return <div>
        <h1>Geolocalizacion</h1>
        <p>Longitud: {state.longitude}</p>
        <p>Latitud: {state.latitude}</p>

        <Link to={{
            pathname: '/map',
            state
        }}>Ver mi localizacion</Link>
    </div>
};
export default PaginaPrincipal;