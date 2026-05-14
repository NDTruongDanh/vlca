"use client";

import dynamic from "next/dynamic";
import { Icon, Button, Select, Option } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/filter.js";
import "@ui5/webcomponents-icons/dist/locate-me.js";
import "@ui5/webcomponents-icons/dist/add.js";
import "@ui5/webcomponents-icons/dist/less.js";
import "@ui5/webcomponents-icons/dist/shipping-status.js";
import { mockVehicles } from "@/data/mockVehicles";

// Dynamically import FleetMap with SSR disabled for Leaflet compatibility
const FleetMap = dynamic(() => import("@/components/maps/FleetMap"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center bg-[#1E2329]">
      <div className="text-lg font-semibold text-gray-400">
        Loading Tracking Map...
      </div>
    </div>
  ),
});

export function TelemetryMap() {
  const initialVehicle = mockVehicles[0];

  return (
    <div className="flex-1 relative bg-[#1E2329] overflow-hidden">
      {/* Real-time Leaflet Map Component */}
      <div className="absolute inset-0 w-full h-full z-0">
        <FleetMap initialVehicle={initialVehicle} />
      </div>

      {/* Map Overlay Gradient for readability (if needed, but Leaflet covers the area) */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1E2329]/20 to-transparent pointer-events-none z-[5]" />

      {/* Floating Search/Filter Bar over Map */}
      <div className="absolute top-6 left-6 z-[1000] flex gap-3">
        <div className="bg-surface-container-lowest border border-outline-variant rounded-lg shadow-sm flex items-center px-3 py-1">
          <Icon name="filter" className="text-outline w-4 h-4 mr-2" />
          <Select className="border-none bg-transparent">
            <Option>All Statuses</Option>
            <Option>Cruising</Option>
            <Option>Idling</Option>
            <Option>Offline</Option>
          </Select>
        </div>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-lg shadow-sm flex items-center px-3 py-1">
          <Icon name="locate-me" className="text-outline w-4 h-4 mr-2" />
          <Select className="border-none bg-transparent">
            <Option>Region: Central</Option>
            <Option>Region: North</Option>
            <Option>Region: South</Option>
          </Select>
        </div>
      </div>

      {/* UI Elements from the prototype overlay */}
      <div className="absolute bottom-6 left-6 z-[1000] bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-md border border-gray-200">
        <h1 className="text-sm font-bold text-gray-800">VH-8842-X Tracking</h1>
        <div className="mt-2 flex items-center gap-4 text-[10px]">
          <div className="flex items-center gap-1">
            <span className="w-3 h-1 bg-blue-500 rounded-full"></span>
            <span>Traveled Route</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-1 bg-red-500 border-t border-dashed"></span>
            <span>Expected Route</span>
          </div>
        </div>
      </div>

      {/* Map Controls */}
      <div className="absolute right-6 bottom-32 flex flex-col gap-2 z-[1000]">
        <Button icon="add" design="Default" className="w-10 h-10 shadow-sm" />
        <Button icon="less" design="Default" className="w-10 h-10 shadow-sm" />
        <Button design="Default" className="w-10 h-10 shadow-sm mt-2" />
      </div>
    </div>
  );
}
