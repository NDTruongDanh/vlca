import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { Vehicle } from "../../types/tracking";

// Fix for default Leaflet marker icon in Next.js
// @ts-expect-error - Private property access
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

interface VehicleMarkerProps {
  vehicle: Vehicle;
}

export function VehicleMarker({ vehicle }: VehicleMarkerProps) {
  const { currentPosition, name } = vehicle;

  return (
    <Marker position={[currentPosition.lat, currentPosition.lng]}>
      <Popup>
        <strong>{name}</strong>
        <br />
        Current Position: {currentPosition.lat.toFixed(4)}, {currentPosition.lng.toFixed(4)}
      </Popup>
    </Marker>
  );
}
