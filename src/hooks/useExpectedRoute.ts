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

    fetchRoute();

    return () => {
      isMounted = false;
    };
    // Only re-fetch if destination changes or if we are at the very start
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [destination.lat, destination.lng]);

  return { route, loading, error };
}
