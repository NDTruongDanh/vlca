import { useState, useEffect } from "react";
import { Coordinate } from "../types/tracking";
import { getRoute } from "../lib/osrm";

export function useExpectedRoute(start: Coordinate, destination: Coordinate) {
  const [route, setRoute] = useState<Coordinate[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchRoute() {
      setLoading(true);
      setError(null);
      try {
        const routeData = await getRoute(start, destination);
        if (isMounted) {
          setRoute(routeData);
        }
      } catch {
        if (isMounted) {
          setError("Failed to fetch expected route");
          setRoute([]);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    // Throttle requests to OSRM API (every 2 seconds max)
    const timeoutId = setTimeout(fetchRoute, 2000);

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start.lat, start.lng, destination.lat, destination.lng]);

  return { route, loading, error };
}
