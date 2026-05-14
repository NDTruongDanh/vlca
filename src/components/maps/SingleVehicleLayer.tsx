"use client";

import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { Flag } from "lucide-react";
import { renderToString } from "react-dom/server";
import { useEffect } from "react";
import { Vehicle } from "../../types/tracking";
import { useVehicleSimulation } from "../../hooks/useVehicleSimulation";
import { VehicleMarker } from "./VehicleMarker";
import { RouteLine } from "./RouteLine";

// Custom Destination Icon
const destinationIcon = L.divIcon({
  html: renderToString(
    <div className="flex items-center justify-center w-8 h-8 bg-red-600 rounded-full shadow-lg border-2 border-white text-white">
      <Flag size={16} />
    </div>
  ),
  className: "",
  iconSize: [32, 32],
  iconAnchor: [16, 32], // Bottom center
});

interface SingleVehicleLayerProps {
  initialVehicle: Vehicle;
  isSelected: boolean;
  onSelect: (id: string) => void;
  onUpdate?: (vehicle: Vehicle) => void;
}

/**
 * Handles simulation and rendering for a single vehicle on the map.
 */
export function SingleVehicleLayer({ initialVehicle, isSelected, onSelect, onUpdate }: SingleVehicleLayerProps) {
  // Use a single source of truth for the vehicle simulation and its planned route
  const { vehicle, plannedPath, currentIndex } = useVehicleSimulation(initialVehicle);

  // Notify parent of vehicle updates (for centering etc.)
  useEffect(() => {
    if (onUpdate) {
      onUpdate(vehicle);
    }
  }, [vehicle, onUpdate]);

  return (
    <>
      {/* Traveled Route (Solid) - Only if selected */}
      {isSelected && vehicle.history.length > 1 && (
        <RouteLine positions={vehicle.history} color="blue" />
      )}

      {/* Expected Route (Dashed) - Only remaining part, only if selected */}
      {isSelected && plannedPath.length > 0 && (
        <RouteLine
          positions={plannedPath.slice(currentIndex)}
          color="red"
          dashArray="10, 10"
        />
      )}

      {/* Vehicle Marker */}
      <VehicleMarker vehicle={vehicle} onSelect={onSelect} />

      {/* Destination Marker */}
      {isSelected && (
        <Marker 
          position={[vehicle.destination.lat, vehicle.destination.lng]}
          icon={destinationIcon}
        >
          <Popup>Destination: {vehicle.name}</Popup>
        </Marker>
      )}
    </>
  );
}
