import { Coordinate } from "../types/tracking";

/**
 * Fetches a route between two coordinates using the public OSRM API.
 * @param start - Starting coordinate
 * @param end - Destination coordinate
 * @returns Array of coordinates representing the route
 */
export async function getRoute(start: Coordinate, end: Coordinate): Promise<Coordinate[]> {
  const url = `https://router.project-osrm.org/route/v1/driving/${start.lng},${start.lat};${end.lng},${end.lat}?overview=full&geometries=geojson`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`OSRM API error: ${response.statusText}`);
    }

    const data = await response.json();

    if (!data.routes || data.routes.length === 0) {
      return [];
    }

    // OSRM returns coordinates as [lng, lat]
    const coordinates: [number, number][] = data.routes[0].geometry.coordinates;

    // Convert to [lat, lng] for Leaflet
    return coordinates.map(([lng, lat]) => ({ lat, lng }));
  } catch (error) {
    console.error("Failed to fetch route from OSRM:", error);
    return [];
  }
}
