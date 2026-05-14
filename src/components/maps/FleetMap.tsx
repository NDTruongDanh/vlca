"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Vehicle } from "../../types/tracking";
import { useVehicleSimulation } from "../../hooks/useVehicleSimulation";
import { useExpectedRoute } from "../../hooks/useExpectedRoute";
import { VehicleMarker } from "./VehicleMarker";
import { RouteLine } from "./RouteLine";

interface FleetMapProps {
  initialVehicle: Vehicle;
}

export default function FleetMap({ initialVehicle }: FleetMapProps) {
  const vehicle = useVehicleSimulation(initialVehicle);
  const { route: expectedRoute, loading } = useExpectedRoute(
    vehicle.currentPosition,
    vehicle.destination
  );

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <MapContainer
        center={[vehicle.currentPosition.lat, vehicle.currentPosition.lng]}
        zoom={14}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Traveled Route (Solid) */}
        <RouteLine positions={vehicle.history} color="blue" />

        {/* Expected Route (Dashed) */}
        {!loading && (
          <RouteLine
            positions={expectedRoute}
            color="red"
            dashArray="10, 10"
          />
        )}

        {/* Vehicle Marker */}
        <VehicleMarker vehicle={vehicle} />

        {/* Destination Marker */}
        <Marker position={[vehicle.destination.lat, vehicle.destination.lng]}>
          <Popup>Destination: {vehicle.name}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
