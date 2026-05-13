"use client";

import { Icon, Button, Select, Option } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/filter.js";
import "@ui5/webcomponents-icons/dist/locate-me.js";
import "@ui5/webcomponents-icons/dist/add.js";
import "@ui5/webcomponents-icons/dist/less.js";
import "@ui5/webcomponents-icons/dist/shipping-status.js";

export function TelemetryMap() {
  return (
    <div className="flex-1 relative bg-[#1E2329] overflow-hidden">
      {/* Map Background Image Placeholder */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-80 mix-blend-luminosity"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBC8nSZ6K_fRNWYRyU0eXlcISjtJxYUzrOc_rifbPG6AkSyEovQmtMdnEDcq4SWko9pa5XvbuPr5RI0Xqv095M-Pp72hD1u2-OD8KokHLNcTSu4j-H1dWX0KxXOcRP2m02FGb5rP8CVONV2d_NLBa4osHlwPrx5BURkZ_VsibMqBPFFVck7XubezRbPlvMcWOn61RF6kLAbzk5jJOrD_Y9KFrsJ409CHZa48uk4YJPC4TA2UWDAAKIUp_JjQGMWMm8Q9F0qREXwe7N-')",
        }}
      />

      {/* Map Overlay Gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1E2329]/80 to-transparent pointer-events-none" />

      {/* Floating Search/Filter Bar over Map */}
      <div className="absolute top-6 left-6 z-10 flex gap-3">
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

      {/* Live Map Markers (Simulated) */}
      {/* Cruising Vehicle (Green) */}
      <div className="absolute top-[30%] left-[40%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center cursor-pointer group">
        <div className="bg-surface-container-lowest text-on-surface text-[10px] font-bold px-2 py-0.5 rounded shadow-sm border border-outline-variant mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
          VH-1102
        </div>
        <div className="w-4 h-4 bg-[#10B981] rounded-full border-2 border-surface-container-lowest shadow-md z-10" />
      </div>

      {/* Excessive Idling Vehicle (Red/Orange glow) */}
      <div className="absolute top-[50%] left-[60%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <div className="absolute w-24 h-24 bg-error/20 rounded-full blur-xl -z-10" />
        <div className="bg-surface-container-lowest text-on-surface text-[10px] font-bold px-2 py-0.5 rounded shadow-sm border border-outline-variant mb-1">
          VH-9921
        </div>
        <div className="w-4 h-4 bg-error rounded-full border-2 border-surface-container-lowest shadow-md z-10" />
      </div>

      {/* Selected Vehicle (Yellow - VH-8842-X) */}
      <div className="absolute top-[45%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
        <div className="bg-primary text-on-primary text-[11px] font-bold px-2.5 py-1 rounded shadow-md border border-primary mb-1 relative">
          VH-8842-X
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary rotate-45" />
        </div>
        <div className="relative">
          <div className="absolute -inset-2 bg-[#F59E0B] rounded-full opacity-30 animate-pulse" />
          <div className="w-5 h-5 bg-[#F59E0B] rounded-full border-2 border-surface-container-lowest shadow-lg z-10 flex items-center justify-center">
            <Icon
              name="shipping-status"
              className="text-[12px] text-white w-3 h-3"
            />
          </div>
        </div>
      </div>

      {/* Map Controls */}
      <div className="absolute right-6 bottom-32 flex flex-col gap-2">
        <Button icon="add" design="Default" className="w-10 h-10 shadow-sm" />
        <Button icon="less" design="Default" className="w-10 h-10 shadow-sm" />
        <Button
          icon="layers"
          design="Default"
          className="w-10 h-10 shadow-sm mt-2"
        />
      </div>
    </div>
  );
}
