"use client";

import { Leaf, Calendar, Truck, ArrowDown, ArrowUp, CheckCircle, RefreshCw } from "lucide-react";
import { ProgressIndicator } from "@ui5/webcomponents-react/ProgressIndicator";
import ValueState from "@ui5/webcomponents-base/dist/types/ValueState.js";

export function KPICards() {
  const kpis = [
    { title: "Real-Time CO2e", value: "1,248", unit: "tons", trend: "4.2% vs Last Week", TrendIcon: ArrowDown, trendColor: "text-status-success", Icon: Leaf },
    { title: "Today's Emissions", value: "42.5", unit: "tons", trend: "1.1% vs Avg", TrendIcon: ArrowUp, trendColor: "text-status-warning", Icon: Calendar, showSpark: true, progress: 75, state: ValueState.Critical },
    { title: "This Month", value: "856.2", unit: "tons", trend: "On Track", TrendIcon: CheckCircle, trendColor: "text-status-success", Icon: Calendar, showProgress: true, progress: 50, state: ValueState.Positive },
    { title: "Fleet Active", value: "142", unit: "/ 150", trend: "Live Sync Active", TrendIcon: RefreshCw, trendColor: "text-on-surface-variant", Icon: Truck }
  ];

  return (
    <div className="col-span-12 grid grid-cols-1 md:grid-cols-4 gap-card-gap">
      {kpis.map((kpi, idx) => (
        <div key={idx} className="bg-surface-container-lowest rounded-lg border border-outline-variant shadow-sm p-4 flex flex-col justify-between">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xs font-semibold text-on-surface-variant uppercase">{kpi.title}</h3>
            <kpi.Icon className="text-on-primary-container" size={20} />
          </div>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold text-on-surface">{kpi.value}</span>
            <span className="text-sm text-on-surface-variant pb-1">{kpi.unit}</span>
          </div>
          <div className={`mt-2 flex items-center gap-1 ${kpi.trendColor} text-xs font-semibold`}>
            <kpi.TrendIcon size={14} aria-label={kpi.trendColor.includes('success') ? "Positive trend" : "Neutral or negative trend"} />
            <span>{kpi.trend}</span>
          </div>
          {(kpi.showSpark || kpi.showProgress) && (
            <div className="mt-3">
              <ProgressIndicator
                value={kpi.progress || 0}
                valueState={kpi.state || ValueState.None}
                hideValue
                className="h-1"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
