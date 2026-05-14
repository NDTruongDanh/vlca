import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { Truck } from "lucide-react";
import { renderToString } from "react-dom/server";
import { Vehicle } from "../../types/tracking";

// Custom Truck Icon using Lucide and Leaflet's DivIcon
const truckIcon = L.divIcon({
  html: renderToString(
    <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-full shadow-lg border-2 border-white text-white">
      <Truck size={24} />
    </div>
  ),
  className: "", // Clear default Leaflet styles
  iconSize: [40, 40],
  iconAnchor: [20, 20],
});

interface VehicleMarkerProps {
  vehicle: Vehicle;
}

export function VehicleMarker({ vehicle }: VehicleMarkerProps) {
  const { currentPosition, name } = vehicle;

  return (
    <Marker 
      position={[currentPosition.lat, currentPosition.lng]}
      icon={truckIcon}
    >
      <Popup>
        <strong>{name}</strong>
        <br />
        Current Position: {currentPosition.lat.toFixed(4)}, {currentPosition.lng.toFixed(4)}
      </Popup>
    </Marker>
  );
}
