import { useState, useEffect, useRef } from "react";
import { Vehicle, Coordinate } from "../types/tracking";

export function useVehicleSimulation(initialVehicle: Vehicle) {
  const [vehicle, setVehicle] = useState<Vehicle>(initialVehicle);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setVehicle((prev) => {
        const { currentPosition, destination, history } = prev;
        
        // Simple linear interpolation towards destination
        const step = 0.0005; // Adjust for speed
        const latDiff = destination.lat - currentPosition.lat;
        const lngDiff = destination.lng - currentPosition.lng;
        
        const distance = Math.sqrt(latDiff * latDiff + lngDiff * lngDiff);
        
        if (distance < step) {
          // If we reached the destination (or very close), just stay there or loop
          // For prototype, let's just stop or restart after a while
          return prev; 
        }

        const newLat = currentPosition.lat + (latDiff / distance) * step;
        const newLng = currentPosition.lng + (lngDiff / distance) * step;
        
        const newPosition: Coordinate = { lat: newLat, lng: newLng };

        return {
          ...prev,
          currentPosition: newPosition,
          history: [...history, newPosition],
        };
      });
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return vehicle;
}
