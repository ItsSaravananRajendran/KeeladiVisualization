import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoicmFhZ2hhdmlzaGFuIiwiYSI6ImNrb2I5ZjZ4dzBqcXgyb3Ftb3g3NDVyc3AifQ.gdbRXWZwNv011EvVVYRsNw';

const MapBox = props => {
    const { src, zoom = 4, lat = 13.0147, lng = 77.7883, ...rest } = props;
    const mapContainer = useRef(null);
    const map = useRef(null);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: src,
            center: [lng, lat],
            zoom: zoom
        });
    });

    return <div >
        <div {...rest} ref={mapContainer} className="map-container" />
    </div>
}

export default MapBox;