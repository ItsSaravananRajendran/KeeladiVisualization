import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoicmFhZ2hhdmlzaGFuIiwiYSI6ImNrb2I5ZjZ4dzBqcXgyb3Ftb3g3NDVyc3AifQ.gdbRXWZwNv011EvVVYRsNw';

const MapBox = props => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(77.7883);
    const [lat, setLat] = useState(13.0147);
    const [zoom, setZoom] = useState(4);

    const { src, ...rest } = props;
    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: props.src,
            center: [lng, lat],
            zoom: zoom
        });
    });

    return <div >
        <div {...rest} ref={mapContainer} className="map-container" />
    </div>
}

export default MapBox;