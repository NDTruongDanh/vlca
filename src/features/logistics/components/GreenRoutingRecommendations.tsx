"use client";

import { Icon } from "@ui5/webcomponents-react/Icon";
import "@ui5/webcomponents-icons/dist/warning.js";
import "@ui5/webcomponents-icons/dist/information.js";
import "@ui5/webcomponents-icons/dist/shipping-status.js";
import "@ui5/webcomponents-icons/dist/locate-me.js";
import "@ui5/webcomponents-icons/dist/slim-arrow-down.js";
import type { RoutingAlternative, Alert } from "../types";

interface GreenRoutingRecommendationsProps {
  alerts?: Alert[];
  routingAlternatives?: RoutingAlternative[];
}

export function GreenRoutingRecommendations({
  alerts = [],
  routingAlternatives = [],
}: GreenRoutingRecommendationsProps) {
  const defaultAlerts: Alert[] = [
    {
      id: "alert-1",
      type: "error",
      title: "Empty Return Trip Detected",
      description:
        "TRK-109 is returning empty from Frankfurt. Consider routing through Mannheim DC for backhaul.",
      action: "View Backhaul Options",
    },
    {
      id: "alert-2",
      type: "warning",
      title: "Sub-optimal Load Utilization",
      description:
        "VAN-402 is dispatched at 45% volume capacity. Consolidation recommended.",
    },
  ];

  const defaultRoutingAlternatives: RoutingAlternative[] = [
    {
      id: "route-1",
      name: "Eco Route A",
      subtitle: "Autobahn Avoidance + Consolidation",
      icon: "eco",
      fuelReduction: "-15%",
      emissionsReduction: "-45 kg",
      transitTime: "+25 mins transit time",
      recommended: true,
    },
    {
      id: "route-2",
      name: "Consolidated B",
      subtitle: "Combine ORD-8921 & ORD-8922",
      icon: "call_merge",
      fuelReduction: "-8%",
      emissionsReduction: "-22 kg",
      transitTime: "+0 mins transit time",
    },
  ];

  const displayAlerts = alerts.length > 0 ? alerts : defaultAlerts;
  const displayRoutes =
    routingAlternatives.length > 0
      ? routingAlternatives
      : defaultRoutingAlternatives;

  const getAlertStyles = (type: Alert["type"]) => {
    const styles = {
      error: "bg-error-container text-on-error-container",
      warning: "bg-[#FFFBEB] text-[#92400E]",
      info: "bg-[#EFF6FF] text-[#0369A1]",
    };
    return styles[type];
  };

  const getAlertIcon = (type: Alert["type"]) => {
    return type === "error" ? "warning" : type === "warning" ? "info" : "info";
  };

  return (
    <div className="mt-6">
      <h3 className="font-title-lg text-title-lg text-on-surface mb-4">
        Green Routing &amp; Efficiency Recommendations
      </h3>

      <div className="grid grid-cols-12 gap-card-gap">
        {/* Alerts Area */}
        <div className="col-span-12 lg:col-span-4 space-y-3">
          {displayAlerts.map((alert) => (
            <div
              key={alert.id}
              className={`${getAlertStyles(alert.type)} p-4 rounded-xl border flex gap-3 items-start shadow-sm ${alert.type === "error" ? "border-error/20" : alert.type === "warning" ? "border-[#FDE68A]" : "border-[#BFDBFE]"}`}
            >
              <Icon
                name={
                  alert.type === "error"
                    ? "warning"
                    : alert.type === "warning"
                      ? "information"
                      : "information"
                }
                style={{ width: "20px", height: "20px", marginTop: "2px" }}
              />
              <div>
                <h4 className="font-title-md text-title-md font-bold mb-1">
                  {alert.title}
                </h4>
                <p className="font-body-md text-body-md opacity-90">
                  {alert.description}
                </p>
                {alert.action && (
                  <button className="mt-2 text-sm font-semibold underline hover:opacity-80">
                    {alert.action}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Routing Alternatives Cards */}
        <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {displayRoutes.map((route) => (
            <div
              key={route.id}
              className={`bg-surface-container-lowest rounded-xl p-5 ${route.recommended ? "border-2 border-primary/20 hover:border-primary" : "border border-outline-variant hover:border-outline"} transition-colors cursor-pointer shadow-[0_2px_4px_rgba(0,0,0,0.05)] relative overflow-hidden group`}
            >
              {route.recommended && (
                <div className="absolute top-0 right-0 bg-primary-container text-on-primary-container px-3 py-1 rounded-bl-lg font-label-md text-label-md font-bold">
                  Recommended
                </div>
              )}

              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-surface-container rounded-lg text-tertiary">
                  <Icon
                    name={
                      route.icon === "eco"
                        ? "shipping-status"
                        : route.icon === "call_merge"
                          ? "locate-me"
                          : "map"
                    }
                    style={{ width: "20px", height: "20px" }}
                  />
                </div>
                <div>
                  <h4 className="font-title-md text-title-md">{route.name}</h4>
                  <p className="font-label-md text-label-md text-on-surface-variant">
                    {route.subtitle}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-surface-container-low p-3 rounded-lg border border-outline-variant/50">
                  <span className="block font-label-md text-label-md text-on-surface-variant mb-1">
                    Fuel Consumption
                  </span>
                  <span className="font-title-lg text-title-lg text-secondary">
                    {route.fuelReduction}
                  </span>
                </div>
                <div className="bg-surface-container-low p-3 rounded-lg border border-outline-variant/50">
                  <span className="block font-label-md text-label-md text-on-surface-variant mb-1">
                    Emissions (CO2e)
                  </span>
                  <span className="font-title-lg text-title-lg text-secondary">
                    {route.emissionsReduction}
                  </span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-outline-variant pt-3">
                <span className="font-tabular-nums text-tabular-nums text-on-surface-variant">
                  {route.transitTime}
                </span>
                <Icon
                  name="slim-arrow-down"
                  style={{
                    width: "20px",
                    height: "20px",
                    opacity: route.recommended ? 1 : 0.5,
                    transition: "opacity 0.2s",
                    transform: "rotate(90deg)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
