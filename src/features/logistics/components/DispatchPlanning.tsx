"use client";

import { Icon } from "@ui5/webcomponents-react/Icon";
import "@ui5/webcomponents-icons/dist/map.js";
import "@ui5/webcomponents-icons/dist/add.js";
import "@ui5/webcomponents-icons/dist/slim-arrow-down.js";
import { OrderManagementTable } from "./OrderManagementTable";
import { FleetCapacityUtilization } from "./FleetCapacityUtilization";
import { GreenRoutingRecommendations } from "./GreenRoutingRecommendations";

export function DispatchPlanning() {
  return (
    <div className="flex-1 overflow-y-auto p-container-padding bg-background h-full">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Dispatch Planning
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">
            Manage daily loads, optimize routes, and minimize fleet emissions.
          </p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <button className="px-4 py-2 border border-outline-variant text-on-surface hover:bg-surface-container-low rounded-lg font-title-md text-title-md transition-colors flex items-center gap-2">
            <Icon name="map" style={{ width: "18px", height: "18px" }} />
            Re-route
          </button>
          <button className="px-4 py-2 border border-outline-variant text-on-surface hover:bg-surface-container-low rounded-lg font-title-md text-title-md transition-colors flex items-center gap-2">
            <Icon name="add" style={{ width: "18px", height: "18px" }} />
            Review
          </button>
          <button className="px-6 py-2 bg-primary text-white hover:bg-primary/90 rounded-lg font-title-md text-title-md shadow-sm transition-colors flex items-center gap-2">
            <Icon
              name="slim-arrow-down"
              style={{
                width: "18px",
                height: "18px",
                transform: "rotate(90deg)",
                color: "white",
              }}
            />
            Dispatch Selected
          </button>
        </div>
      </div>

      {/* Split Layout Workspace */}
      <div className="grid grid-cols-12 gap-card-gap mb-card-gap">
        {/* Left Pane: Order Management Table */}
        <div className="col-span-12 lg:col-span-8">
          <OrderManagementTable />
        </div>

        {/* Right Pane: Fleet Capacity */}
        <div
          className="col-span-12 lg:col-span-4 flex flex-col gap-card-gap"
          style={{ height: "500px" }}
        >
          <FleetCapacityUtilization />
        </div>
      </div>

      {/* Green Routing & Efficiency */}
      <GreenRoutingRecommendations />

      {/* Bottom padding for scroll */}
      <div className="h-8"></div>
    </div>
  );
}
