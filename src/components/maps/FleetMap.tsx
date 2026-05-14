"use client";

import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { Vehicle, Coordinate } from "../../types/tracking";
import { SingleVehicleLayer } from "./SingleVehicleLayer";

interface FleetMapProps {
  vehicles: Vehicle[];
}

function MapRecenter({ position }: { position: Coordinate }) {
  const map = useMap();
  useEffect(() => {
    map.setView([position.lat, position.lng]);
  }, [position.lat, position.lng, map]);
  return null;
}

export default function FleetMap({ vehicles }: FleetMapProps) {
  const [selectedVehicleId, setSelectedVehicleId] = useState<string | null>(vehicles[0]?.id || null);

  const selectedVehicle = vehicles.find(v => v.id === selectedVehicleId);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <MapContainer
        center={[vehicles[0].currentPosition.lat, vehicles[0].currentPosition.lng]}
        zoom={13}
        scrollWheelZoom={true}
        zoomSnap={0.1}
        zoomDelta={0.1}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Recenter on the selected vehicle for tracking */}
        {selectedVehicle && (
          <MapRecenter position={selectedVehicle.currentPosition} />
        )}

        {/* Render layers for all vehicles */}
        {vehicles.map((v) => (
          <SingleVehicleLayer 
            key={v.id} 
            initialVehicle={v} 
            isSelected={v.id === selectedVehicleId}
            onSelect={setSelectedVehicleId}
          />
        ))}
      </MapContainer>
    </div>
  );
}
