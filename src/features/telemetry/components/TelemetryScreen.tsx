"use client";

import { TelemetryMap } from "./TelemetryMap";
import { TelemetryDetails } from "./TelemetryDetails";
import { TelemetryTimeline } from "./TelemetryTimeline";

export function TelemetryScreen() {
  return (
    <div className="flex flex-1 h-full relative overflow-hidden">
      <div className="flex-1 flex relative overflow-hidden">
        <TelemetryMap />
        <TelemetryTimeline />
      </div>
      <TelemetryDetails />
    </div>
  );
}
