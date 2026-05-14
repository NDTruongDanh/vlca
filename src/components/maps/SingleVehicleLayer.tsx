"use client";

import { Marker, Popup, useMap } from "react-leaflet";
import { useEffect } from "react";
import { Vehicle, Coordinate } from "../../types/tracking";
import { useVehicleSimulation } from "../../hooks/useVehicleSimulation";
import { useExpectedRoute } from "../../hooks/useExpectedRoute";
import { VehicleMarker } from "./VehicleMarker";
import { RouteLine } from "./RouteLine";

interface SingleVehicleLayerProps {
  initialVehicle: Vehicle;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

/**
 * Handles simulation and rendering for a single vehicle on the map.
 */
export function SingleVehicleLayer({ initialVehicle, isSelected, onSelect }: SingleVehicleLayerProps) {
  const vehicle = useVehicleSimulation(initialVehicle);
  const { route: expectedRoute, loading } = useExpectedRoute(
    vehicle.currentPosition,
    vehicle.destination
  );

  return (
    <>
      {/* Traveled Route (Solid) - Only if selected */}
      {isSelected && <RouteLine positions={vehicle.history} color="blue" />}

      {/* Expected Route (Dashed) - Only if selected */}
      {isSelected && !loading && expectedRoute.length > 0 && (
        <RouteLine
          positions={expectedRoute.slice(vehicle.history.length - 1)}
          color="red"
          dashArray="10, 10"
        />
      )}

      {/* Vehicle Marker */}
      <VehicleMarker vehicle={vehicle} onSelect={onSelect} />

      {/* Destination Marker */}
      {isSelected && (
        <Marker position={[vehicle.destination.lat, vehicle.destination.lng]}>
          <Popup>Destination: {vehicle.name}</Popup>
        </Marker>
      )}
    </>
  );
}
