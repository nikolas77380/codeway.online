'use client';

import { Box } from '@mui/material';

import { useRef, MutableRefObject } from 'react';

import { MapContainer, TileLayer, Marker, useMapEvent, Popup, Tooltip } from 'react-leaflet';

import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

import RoomIcon from '@mui/icons-material/Room';

import style from './GoogleMapItem.style';
import { renderToStaticMarkup } from 'react-dom/server';

const GoogleMapItem = () => { 

  const animateRef = useRef(false);

  const lat = 50.4501;
  const lng = 30.5234;
  const address = "Beresteysky prospect, 9/47";

  const roomIconHtml = renderToStaticMarkup(<RoomIcon style={{ color: 'red', fontSize: '32px' }} />);
  const customIcon = L.divIcon({
    html: roomIconHtml,
    iconSize: [45, 41],
    iconAnchor: [12, 41],
    className: 'custom-icon',
  });

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
        <Marker position={[lat, lng]} icon={customIcon}>
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