import { Vehicle } from "../types/tracking";

export const mockVehicles: Vehicle[] = [
  {
    id: "v1",
    name: "Truck 01 - Hanoi Express",
    currentPosition: { lat: 21.0285, lng: 105.8542 }, // Hoan Kiem Lake
    destination: { lat: 21.0333, lng: 105.7833 }, // Cau Giay
    history: [],
  },
  {
    id: "v2",
    name: "Truck 02 - West Lake Logistics",
    currentPosition: { lat: 21.0585, lng: 105.8233 }, // West Lake
    destination: { lat: 21.0050, lng: 105.8433 }, // Hai Ba Trung
    history: [],
  },
  {
    id: "v3",
    name: "Truck 03 - Long Bien Cargo",
    currentPosition: { lat: 21.0433, lng: 105.8733 }, // Long Bien Bridge area
    destination: { lat: 21.0200, lng: 105.8000 }, // Ba Dinh
    history: [],
  },
  {
    id: "v4",
    name: "Truck 04 - Thanh Xuan Hub",
    currentPosition: { lat: 20.9933, lng: 105.8133 }, // Thanh Xuan
    destination: { lat: 21.0700, lng: 105.8800 }, // Gia Lam
    history: [],
  },
];
