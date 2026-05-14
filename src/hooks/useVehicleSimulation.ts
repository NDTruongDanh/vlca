import { useState, useEffect, useRef } from "react";
import { Vehicle, Coordinate } from "../types/tracking";
import { getRoute } from "../lib/osrm";

/**
 * Simulates a vehicle moving along a road route fetched from OSRM.
 */
export function useVehicleSimulation(initialVehicle: Vehicle) {
  const [vehicle, setVehicle] = useState<Vehicle>(initialVehicle);
  const [route, setRoute] = useState<Coordinate[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const indexRef = useRef(0);

  // Fetch the road route once on mount
  useEffect(() => {
    async function fetchPath() {
      const roadRoute = await getRoute(initialVehicle.currentPosition, initialVehicle.destination);
      if (roadRoute.length > 0) {
        setRoute(roadRoute);
        setVehicle(prev => ({
          ...prev,
          currentPosition: roadRoute[0],
          history: [roadRoute[0]]
        }));
      }
    }
    fetchPath();
  }, [initialVehicle.currentPosition, initialVehicle.destination]);

  // Move the vehicle along the fetched route
  useEffect(() => {
    if (route.length === 0) return;

    intervalRef.current = setInterval(() => {
      setVehicle((prev) => {
        if (indexRef.current >= route.length - 1) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          return prev;
        }

        indexRef.current += 1;
        const newPosition = route[indexRef.current];

        return {
          ...prev,
          currentPosition: newPosition,
          history: [...prev.history, newPosition],
        };
      });
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [route]);

  return vehicle;
}
