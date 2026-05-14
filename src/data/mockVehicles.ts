import { Vehicle } from "../types/tracking";

export const mockVehicles: Vehicle[] = [
  {
    id: "v1",
    name: "Truck 01 - Hanoi Express",
    currentPosition: { lat: 21.0285, lng: 105.8542 }, // Hoan Kiem Lake
    destination: { lat: 21.0333, lng: 105.7833 },    // Cau Giay
    history: [
      { lat: 21.0250, lng: 105.8600 },
      { lat: 21.0270, lng: 105.8580 },
      { lat: 21.0285, lng: 105.8542 },
    ],
  },
];
