import React from 'react'


import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={16}
        defaultCenter={{ lat: 54.897507, lng: 23.904443 }}
    >
        {props.isMarkerShown && <Marker position={{ lat: 54.897507, lng: 23.904443 }} />}
    </GoogleMap>
))

export default MapComponent



