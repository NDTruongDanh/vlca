"use client";

import { Table } from "@ui5/webcomponents-react/Table";
import { TableHeaderRow } from "@ui5/webcomponents-react/TableHeaderRow";
import { TableHeaderCell } from "@ui5/webcomponents-react/TableHeaderCell";
import { TableRow } from "@ui5/webcomponents-react/TableRow";
import { TableCell } from "@ui5/webcomponents-react/TableCell";

const alerts = [
  { icon: "warning", color: "text-status-error", title: "High Idling Alert - Unit VN-482", description: "Idling > 45 mins at Port of Hai Phong.", time: "10m ago" },
  { icon: "schedule", color: "text-status-warning", title: "Delayed Delivery - Route North-South", description: "Expected delay 2 hours due to traffic.", time: "1h ago" },
  { icon: "co2", color: "text-status-error", title: "Emission Threshold Exceeded", description: "Fleet segment B exceeded daily limit by 15%.", time: "3h ago" },
  { icon: "event_note", color: "text-on-primary-container", title: "Compliance Reminder", description: "Q3 Emissions Report due in 5 days.", time: "1d ago" }
];

export function OperationalAlertsTable() {
  return (
    <div className="col-span-12 md:col-span-7 bg-surface-container-lowest rounded-lg border border-outline-variant shadow-sm flex flex-col overflow-hidden">
      <div className="px-6 py-4 border-b border-outline-variant flex justify-between items-center bg-surface-container-lowest">
        <h2 className="text-lg font-bold text-on-surface">Operational Alerts</h2>
        <span className="px-2 py-0.5 bg-error-container text-on-error-container text-xs font-bold rounded-full">4 New</span>
      </div>
      <div className="flex-1 overflow-y-auto max-h-[300px]">
        <Table
          headerRow={
            <TableHeaderRow>
              <TableHeaderCell width="48px"></TableHeaderCell>
              <TableHeaderCell>Alert Details</TableHeaderCell>
              <TableHeaderCell width="100px" horizontalAlign="End">Time</TableHeaderCell>
            </TableHeaderRow>
          }
        >
          {alerts.map((alert, idx) => (
            <TableRow key={idx}>
              <TableCell>
                <span className={`material-symbols-outlined ${alert.color}`}>{alert.icon}</span>
              </TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-on-surface">{alert.title}</span>
                  <span className="text-xs text-on-surface-variant">{alert.description}</span>
                </div>
              </TableCell>
              <TableCell>
                <span className="text-xs text-on-surface-variant">{alert.time}</span>
              </TableCell>
            </TableRow>
          ))}
        </Table>
      </div>
    </div>
  );
}
