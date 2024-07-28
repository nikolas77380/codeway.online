'use client';

import { Box } from '@mui/material';

import { useRef, MutableRefObject } from 'react';

import { MapContainer, TileLayer, Marker, useMapEvent, Popup, Tooltip } from 'react-leaflet';

import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

import style from './GoogleMapItem.style';

const redIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const GoogleMapItem = () => { 

  const animateRef = useRef(false);

  const lat = 50.4501;
  const lng = 30.5234;
  const address = "Beresteysky prospect, 9/47";

  function SetViewOnClick({ animateRef }: { animateRef: MutableRefObject<boolean> }) {
    const map = useMapEvent('click', (e) => {
      map.setView(e.latlng, map.getZoom(), {
        animate: animateRef.current || false,
      })
    })
  
    return null
  };

  return (
    <Box sx={style.mapContainer}>
      <MapContainer
        center={[lat, lng]}
        zoom={16}
        scrollWheelZoom={false}
        className='map-container'
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]} icon={redIcon}>
          <Popup>
            {address}
          </Popup>
          <Tooltip>
            {address}
          </Tooltip>
        </Marker>
        <SetViewOnClick animateRef={animateRef} />
      </MapContainer>
    </Box>
  )
}

export default GoogleMapItem;