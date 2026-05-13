"use client";

import { Icon } from "@ui5/webcomponents-react/Icon";
import "@ui5/webcomponents-icons/dist/shipping-status.js";
import "@ui5/webcomponents-icons/dist/product.js";
import "@ui5/webcomponents-icons/dist/less.js";
import "@ui5/webcomponents-icons/dist/add.js";
import "@ui5/webcomponents-icons/dist/warning.js";
import type { Order } from "../types";

interface OrderManagementTableProps {
  orders?: Order[];
  selectedCount?: number;
  pendingCount?: number;
}

export function OrderManagementTable({
  orders = [],
  selectedCount = 4,
  pendingCount = 12,
}: OrderManagementTableProps) {
  const defaultOrders: Order[] = [
    {
      id: "ORD-8921",
      status: "ready",
      destination: "Berlin DC North",
      window: "08:00 - 10:00",
      vehicle: undefined,
      selected: true,
    },
    {
      id: "ORD-8922",
      status: "ready",
      destination: "Hamburg Port Auth",
      window: "10:00 - 14:00",
      vehicle: undefined,
      selected: true,
    },
    {
      id: "ORD-8919",
      status: "loading",
      destination: "Munich Central Hub",
      window: "06:00 - 08:00",
      vehicle: "VAN-402",
      co2e: 142,
      icon: "local_shipping",
    },
    {
      id: "ORD-8918",
      status: "dispatched",
      destination: "Frankfurt Airport Facility",
      window: "04:00 - 06:00",
      vehicle: "TRK-109",
      co2e: 856,
      icon: "fire_truck",
    },
    {
      id: "ORD-8915",
      status: "delayed",
      destination: "Stuttgart Industrial Park",
      window: "Yesterday",
      vehicle: undefined,
    },
  ];

  const displayOrders = orders.length > 0 ? orders : defaultOrders;

  const getStatusBadge = (status: Order["status"]) => {
    const statusConfig = {
      ready: {
        bg: "bg-tertiary-container",
        text: "text-on-tertiary",
        icon: "✓",
        label: "Ready",
      },
      loading: {
        bg: "bg-[#FEF3C7]",
        text: "text-[#92400E]",
        icon: "↻",
        label: "Loading",
      },
      dispatched: {
        bg: "bg-[#D1FAE5]",
        text: "text-[#065F46]",
        icon: "✓",
        label: "Dispatched",
      },
      delayed: {
        bg: "bg-error-container",
        text: "text-on-error-container",
        icon: "⚠",
        label: "Delayed",
      },
    };
    const config = statusConfig[status];
    return config;
  };

  return (
    <div
      className="bg-surface-container-lowest rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.05)] border border-outline-variant overflow-hidden flex flex-col"
      style={{ height: "500px" }}
    >
      <div className="p-4 border-b border-outline-variant flex justify-between items-center bg-surface-bright">
        <h3 className="text-headline-md text-on-surface">Order Management</h3>
        <div className="flex gap-2">
          <span className="bg-surface-container-high text-on-surface px-3 py-1 rounded-full text-label-md">
            {pendingCount} Pending
          </span>
          <span className="bg-primary-container text-on-primary-container px-3 py-1 rounded-full text-label-md">
            {selectedCount} Selected
          </span>
        </div>
      </div>
      <div className="overflow-x-auto flex-1">
        <table className="w-full text-left border-collapse">
          <thead className="bg-surface-container-low border-b border-outline-variant sticky top-0 z-10">
            <tr>
              <th className="p-3 w-10">
                <input
                  type="checkbox"
                  defaultChecked
                  className="border-outline-variant text-primary focus:ring-primary"
                />
              </th>
              <th className="p-3 text-label-md text-on-surface-variant uppercase">
                Order ID
              </th>
              <th className="p-3 text-label-md text-on-surface-variant uppercase">
                Status
              </th>
              <th className="p-3 text-label-md text-on-surface-variant uppercase">
                Destination
              </th>
              <th className="p-3 text-label-md text-on-surface-variant uppercase">
                Window
              </th>
              <th className="p-3 text-label-md text-on-surface-variant uppercase">
                Vehicle
              </th>
              <th className="p-3 text-label-md text-on-surface-variant uppercase text-right">
                Est. CO2e
              </th>
            </tr>
          </thead>
          <tbody className="text-body-md tabular-nums divide-y divide-outline-variant/50">
            {displayOrders.map((order) => {
              const statusConfig = getStatusBadge(order.status);
              const isSelected = order.selected !== false;
              const bgClass = isSelected
                ? "bg-primary-fixed/20"
                : "bg-[#F9FAFB]";

              return (
                <tr
                  key={order.id}
                  className={`${bgClass} hover:bg-surface-container-lowest transition-colors`}
                >
                  <td className="p-3">
                    <input
                      type="checkbox"
                      defaultChecked={isSelected}
                      className="border-outline-variant text-primary focus:ring-primary"
                    />
                  </td>
                  <td
                    className={`p-3 font-medium ${order.status === "delayed" ? "text-error" : ""}`}
                  >
                    {order.id}
                  </td>
                  <td className="p-3">
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-label-sm ${statusConfig.bg} ${statusConfig.text}`}
                    >
                      <Icon
                        name={
                          statusConfig.icon === "✓"
                            ? "add"
                            : statusConfig.icon === "↻"
                              ? "less"
                              : "warning"
                        }
                        style={{ width: "16px", height: "16px" }}
                      />
                      {statusConfig.label}
                    </span>
                  </td>
                  <td className="p-3 truncate max-w-37.5">
                    {order.destination}
                  </td>
                  <td
                    className={`p-3 ${order.status === "delayed" ? "text-error" : ""}`}
                  >
                    {order.window}
                  </td>
                  <td className="p-3 text-on-surface-variant">
                    {order.vehicle ? (
                      <div className="flex items-center gap-2">
                        <Icon
                          name={
                            order.icon === "fire_truck"
                              ? "product"
                              : "shipping-status"
                          }
                          style={{ width: "18px", height: "18px" }}
                        />
                        <span>{order.vehicle}</span>
                      </div>
                    ) : (
                      "Unassigned"
                    )}
                  </td>
                  <td className="p-3 text-right">
                    {order.co2e ? `${order.co2e} kg` : "--"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
