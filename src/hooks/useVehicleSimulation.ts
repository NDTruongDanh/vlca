import { useState, useEffect, useRef } from "react";
import { Vehicle, Coordinate } from "../types/tracking";
import { getRoute } from "../lib/osrm";

/**
 * Simulates a vehicle moving along a road route fetched from OSRM.
 * Returns the vehicle state, the full planned path, and the current index.
 */
export function useVehicleSimulation(initialVehicle: Vehicle) {
  const [vehicle, setVehicle] = useState<Vehicle>(initialVehicle);
  const [plannedPath, setPlannedPath] = useState<Coordinate[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Fetch the road route once on mount
  useEffect(() => {
    async function fetchPath() {
      const roadRoute = await getRoute(initialVehicle.currentPosition, initialVehicle.destination);
      if (roadRoute.length > 0) {
        setPlannedPath(roadRoute);
        setVehicle(prev => ({
          ...prev,
          currentPosition: roadRoute[0],
          history: [roadRoute[0]]
        }));
        setCurrentIndex(0);
      }
    }
    fetchPath();
  }, [initialVehicle.currentPosition.lat, initialVehicle.currentPosition.lng, initialVehicle.destination.lat, initialVehicle.destination.lng]);

  // Move the vehicle along the fetched route
  useEffect(() => {
    if (plannedPath.length === 0) return;

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        
        if (nextIndex >= plannedPath.length) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          return prevIndex;
        }

        const newPosition = plannedPath[nextIndex];
        
        setVehicle((prevVehicle) => ({
          ...prevVehicle,
          currentPosition: newPosition,
          history: [...prevVehicle.history, newPosition],
        }));

        return nextIndex;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [plannedPath]);

  return { vehicle, plannedPath, currentIndex };
}
