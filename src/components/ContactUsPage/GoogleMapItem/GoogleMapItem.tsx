"use client";

import { Box } from "@mui/material";

import { MutableRefObject, useRef } from "react";

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Tooltip,
  useMapEvent,
} from "react-leaflet";

import L from "leaflet";

import "leaflet/dist/leaflet.css";

import RoomIcon from "@mui/icons-material/Room";

import { renderToStaticMarkup } from "react-dom/server";
import style from "./GoogleMapItem.style";

const GoogleMapItem = () => {
  const animateRef = useRef(false);
  const lat = 46.9622;
  const lng = 32.002777;
  const address = "Миколаїв - Україна";

  const roomIconHtml = renderToStaticMarkup(
    <RoomIcon style={{ color: "red", fontSize: "32px" }} />
  );
  const customIcon = L.divIcon({
    html: roomIconHtml,
    iconSize: [45, 41],
    iconAnchor: [12, 41],
    className: "custom-icon",
  });

  function SetViewOnClick({
    animateRef,
  }: {
    animateRef: MutableRefObject<boolean>;
  }) {
    const map = useMapEvent("click", (e) => {
      map.setView(e.latlng, map.getZoom(), {
        animate: animateRef.current || false,
      });
    });

    return null;
  }

  return (
    <Box sx={style.mapContainer}>
      <MapContainer
        center={[lat, lng]}
        zoom={16}
        scrollWheelZoom={false}
        className="map-container"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[lat, lng]} icon={customIcon}>
          <Popup>{address}</Popup>
          <Tooltip>{address}</Tooltip>
        </Marker>
        <SetViewOnClick animateRef={animateRef} />
      </MapContainer>
    </Box>
  );
};

export default GoogleMapItem;
