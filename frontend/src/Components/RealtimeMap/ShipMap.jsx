// src/components/ShipMap.js
import React from "react";
import { MapContainer, TileLayer, Marker, Popup,Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "../../index.css"
import { FaShip } from "react-icons/fa"; // Import the ship icon from react-icons
import { renderToStaticMarkup } from "react-dom/server"; // Required to render React components to static HTML

// Convert the React Icon to an HTML string
const iconMarkup = renderToStaticMarkup(<FaShip size={14} color="red" opacity={0.9} />);
const customIcon = L.divIcon({
  html: iconMarkup,
  iconSize: [32, 32], // Adjust the size to match the icon
  className: "custom-ship-icon", // You can define custom styles here
});

const ShipMap = ({ ships,lat,lng,max,min,zoom,height,width }) => {
  const position = [lat, lng]; // Center of the map
  const circles = [
    { center: [51.508, -392], color: '#2563eb', fillColor: '#1d4ed8', radius: 325000  },
    { center: [-3.8, 72.2], color: '#2563eb', fillColor: '#1d4ed8', radius: 325000 },
    { center: [-55.508, -292.11], color: '#2563eb', fillColor: '#1d4ed8', radius: 325000 },
    { center: [-13.508, -90.11], color: '#2563eb', fillColor: '#1d4ed8', radius: 325000 },
    { center: [48.508, -160.11], color: '#2563eb', fillColor: '#1d4ed8', radius: 325000 },
    { center: [-70.3, -500.11], color: '#2563eb', fillColor: '#1d4ed8', radius: 325000 },
    { center: [16.3, -293.11], color: '#2563eb', fillColor: '#1d4ed8', radius: 42500 },
    { center: [7.3, -282.11], color: '#2563eb', fillColor: '#1d4ed8', radius: 42500 },
    { center: [19.6, -270.11], color: '#2563eb', fillColor: '#1d4ed8', radius: 42500 },
    { center: [13.6, -277.11], color: '#2563eb', fillColor: '#1d4ed8', radius: 42500 },
  ];
  return (
    <MapContainer
      center={position}
      zoom={3}
      style={{ height: height, width: width }}
      maxZoom={max}
      minZoom={min}
      zoomControl={zoom}
      attributionControl={false}
    >
<TileLayer
  url="https://tile.jawg.io/jawg-matrix/{z}/{x}/{y}{r}.png?access-token={accessToken}"
  attribution='&copy; <a href="https://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">Jawg Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  accessToken="6kXZfHQVOORuN40KWifsr5CAdTDWXPnpmMsaLuBPFfSoogfUFn05U26PXlAHQbzq"
/>
      {ships.map((ship, index) => (
        <Marker
          key={index}
          position={[ship.lat, ship.lng]}
          icon={customIcon} // Use the custom icon
        >
<Popup>
            <b>Ship ID:</b> <span className="text-green-500">{ship.id}</span><br />
            <b>Captain:</b> {ship.captain}<br />
            <b>Speed:</b> {ship.speed} knots<br />
            <b>Lat:</b>L {ship.lat}, <b>Lng:</b> {ship.lng}<br />
            <b>Destination:</b> {ship.destination}<br />
            <b>Position received:</b> {ship.positionReceived} ago
          </Popup>
        </Marker>
      ))}
      {circles.map((circle, index) => (
        <Circle 
          key={index} 
          center={circle.center} 
          color={circle.color} 
          fillColor={circle.fillColor} 
          fillOpacity={0.5} 
          radius={circle.radius} 
        />
      ))}
    </MapContainer>
  );
};

export default ShipMap;
