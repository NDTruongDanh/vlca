export interface Order {
  id: string;
  status: "ready" | "loading" | "dispatched" | "delayed";
  destination: string;
  window: string;
  vehicle?: string;
  co2e?: number;
  selected?: boolean;
  icon?: "local_shipping" | "fire_truck";
}

export interface RoutingAlternative {
  id: string;
  name: string;
  subtitle: string;
  icon: "eco" | "call_merge" | "route";
  fuelReduction: string;
  emissionsReduction: string;
  transitTime: string;
  recommended?: boolean;
}

export interface Alert {
  id: string;
  type: "error" | "warning" | "info";
  title: string;
  description: string;
  action?: string;
}
