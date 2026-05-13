"use client";

import { Icon } from "@ui5/webcomponents-react/Icon";
import "@ui5/webcomponents-icons/dist/filter.js";
import "@ui5/webcomponents-icons/dist/product.js";

interface FleetCapacityUtilizationProps {
  weightPercentage?: number;
  volumePercentage?: number;
  weightUsed?: string;
  weightTotal?: string;
  volumeUsed?: string;
  volumeTotal?: string;
  availableCapacity?: string;
}

export function FleetCapacityUtilization({
  weightPercentage = 78,
  volumePercentage = 68,
  weightUsed = "12,450",
  weightTotal = "16,000",
  volumeUsed = "82",
  volumeTotal = "120",
  availableCapacity = "3,550 kg",
}: FleetCapacityUtilizationProps) {
  const circumference = 2 * Math.PI * 40; // r = 40
  const strokeDashoffset =
    circumference - (weightPercentage / 100) * circumference;

  return (
    <div className="bg-surface-container-lowest rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.05)] border border-outline-variant p-5 flex-1">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-title-lg text-title-lg text-on-surface">
          Fleet Capacity Utilization
        </h3>
        <button className="text-on-surface-variant hover:text-primary transition-colors">
          <Icon name="filter" style={{ width: "24px", height: "24px" }} />
        </button>
      </div>

      <div className="flex flex-col items-center justify-center py-4">
        {/* Simulated Progress Ring */}
        <div className="relative w-32 h-32">
          <svg
            className="w-full h-full transform -rotate-90"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              stroke="#ECEEF0"
              strokeWidth="12"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              stroke="#0A6ED1"
              strokeWidth="12"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-display text-display text-on-surface leading-none">
              {weightPercentage}
              <span className="text-[20px]">%</span>
            </span>
            <span className="font-label-md text-label-md text-on-surface-variant mt-1">
              Allocated
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-4 mt-2">
        <div>
          <div className="flex justify-between font-body-md text-body-md mb-1">
            <span className="text-on-surface-variant">Weight Distributed</span>
            <span className="font-semibold">
              {weightUsed} / {weightTotal} kg
            </span>
          </div>
          <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
            <div
              className="h-full bg-primary"
              style={{ width: `${weightPercentage}%` }}
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between font-body-md text-body-md mb-1">
            <span className="text-on-surface-variant">Volume (Pallets)</span>
            <span className="font-semibold">
              {volumeUsed} / {volumeTotal}
            </span>
          </div>
          <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
            <div
              className="h-full bg-secondary"
              style={{ width: `${volumePercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Available Space Metric Mini Card */}
      <div className="bg-secondary-container text-on-secondary-container rounded-xl p-4 flex items-center justify-between border border-outline-variant/30 mt-4">
        <div>
          <p className="font-label-md text-label-md opacity-80 uppercase tracking-wider mb-1">
            Available Capacity
          </p>
          <p className="font-headline-md text-headline-md">
            {availableCapacity}{" "}
            <span className="font-body-md text-body-md font-normal opacity-80">
              spare
            </span>
          </p>
        </div>
        <div className="w-10 h-10 bg-on-secondary-container/10 rounded-full flex items-center justify-center">
          <Icon name="product" style={{ width: "20px", height: "20px" }} />
        </div>
      </div>
    </div>
  );
}
