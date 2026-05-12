"use client";

import { ProgressIndicator } from "@ui5/webcomponents-react/ProgressIndicator";
import ValueState from "@ui5/webcomponents-base/dist/types/ValueState.js";

export function SustainabilityScorecard() {
  const metrics = [
    { label: "Carbon Efficiency Trend", value: 75, trend: "+12%", state: ValueState.Positive },
    { label: "Fuel Efficiency (L/100km)", value: 45, trend: "-2%", state: ValueState.Critical },
    { label: "Route Optimization", value: 85, trend: "+8%", state: ValueState.Positive }
  ];

  return (
    <div className="col-span-12 md:col-span-5 bg-surface-container-lowest rounded-lg border border-outline-variant shadow-sm flex flex-col">
      <div className="px-6 py-4 border-b border-outline-variant">
        <h2 className="text-lg font-bold text-on-surface">Sustainability Scorecard</h2>
      </div>
      <div className="p-6 flex flex-col gap-6">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 rounded bg-primary-container/10 border border-on-primary-container/20 flex items-center justify-center">
            <span className="text-3xl font-bold text-on-primary-container">B+</span>
          </div>
          <div>
            <p className="font-semibold text-on-surface">Overall ESG Rating</p>
            <p className="text-sm text-on-surface-variant">Industry Average: C+</p>
          </div>
        </div>
        <div className="space-y-4">
          {metrics.map((metric, idx) => (
            <div key={idx}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-on-surface">{metric.label}</span>
                <span className={`font-semibold ${metric.state === ValueState.Positive ? 'text-status-success' : 'text-status-warning'}`}>
                  {metric.trend}
                </span>
              </div>
              <ProgressIndicator
                value={metric.value}
                valueState={metric.state}
                displayValue={`${metric.value}%`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
