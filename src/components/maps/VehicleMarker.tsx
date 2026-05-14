import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { Truck } from "lucide-react";
import { renderToString } from "react-dom/server";
import { Vehicle } from "../../types/tracking";

// Fix for default Leaflet marker icon in Next.js
// @ts-expect-error - Private property access
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

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
  onSelect?: (id: string) => void;
}

export function VehicleMarker({ vehicle, onSelect }: VehicleMarkerProps) {
  const { currentPosition, name, id } = vehicle;

  return (
    <Marker 
      position={[currentPosition.lat, currentPosition.lng]}
      icon={truckIcon}
      eventHandlers={{
        click: () => onSelect?.(id),
      }}
    >
      <Popup>
        <strong>{name}</strong>
        <br />
        Current Position: {currentPosition.lat.toFixed(4)}, {currentPosition.lng.toFixed(4)}
      </Popup>
    </Marker>
  );
}
