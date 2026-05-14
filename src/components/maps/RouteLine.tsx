import { Polyline } from "react-leaflet";
import { Coordinate } from "../../types/tracking";

interface RouteLineProps {
  positions: Coordinate[];
  color: string;
  dashArray?: string;
}

export function RouteLine({ positions, color, dashArray }: RouteLineProps) {
  if (positions.length < 2) return null;

  const leafletPositions = positions.map((p) => [p.lat, p.lng] as [number, number]);

  return (
    <Polyline
      positions={leafletPositions}
      pathOptions={{ color, dashArray, weight: 4, smoothFactor: 1, noClip: true }}
    />
  );
}
