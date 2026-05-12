"use client";

import { DonutChart } from "@ui5/webcomponents-react-charts/DonutChart";

const dataset = [
  { name: "Cruising", value: 98 },
  { name: "Idling", value: 30 },
  { name: "Offline", value: 22 }
];

export function FleetStatusDonut() {
  return (
    <div className="col-span-12 md:col-span-4 bg-surface-container-lowest rounded-lg border border-outline-variant shadow-sm flex flex-col">
      <div className="px-6 py-4 border-b border-outline-variant">
        <h2 className="text-lg font-bold text-on-surface">Fleet Status</h2>
      </div>
      <div className="p-6 flex flex-col items-center justify-center flex-1 gap-6">
        <div className="w-full h-40">
          <DonutChart
            dataset={dataset}
            dimension={{ accessor: "name" }}
            measure={{ accessor: "value", colors: ["#107e3e", "#e9730c", "#717784"] }}
            chartConfig={{
              legendPosition: "bottom",
              margin: { top: 0, right: 0, bottom: 0, left: 0 }
            }}
            centerLabel="150 Units"
          />
        </div>
        <div className="w-full space-y-3">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-status-success"></div>
              <span className="text-on-surface">Cruising</span>
            </div>
            <span className="font-semibold">65% (98)</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-status-warning"></div>
              <span className="text-on-surface">Idling</span>
            </div>
            <span className="font-semibold">20% (30)</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-on-surface-variant"></div>
              <span className="text-on-surface">Offline</span>
            </div>
            <span className="font-semibold">15% (22)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
