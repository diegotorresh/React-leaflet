import React from 'react'
import {Marker} from 'react-leaflet'
import {IconLocation} from './IconLocation'
import {tiendas} from '../assets/data.json'

const Markers = (props) => {

    const {tiendas}= props;
    const markers = tiendas.map((tienda, i) => (
        <Marker 
            key={i}
            position={tienda.geometry} 
            icon={IconLocation} 
        />
    ));
    return markers;
};

export default Markers;