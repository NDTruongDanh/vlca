"use client";

import {
  ObjectStatus,
  ProgressIndicator,
  List,
  ListItemStandard,
  Icon,
  Label,
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/performance.js";
import "@ui5/webcomponents-icons/dist/history.js";
import "@ui5/webcomponents-icons/dist/mileage.js";
import "@ui5/webcomponents-icons/dist/temperature.js";
import "@ui5/webcomponents-icons/dist/warning.js";
import "@ui5/webcomponents-icons/dist/product.js";
import "@ui5/webcomponents-icons/dist/attachment.js";

export function TelemetryDetails() {
  return (
    <aside className="w-[320px] bg-surface-container-lowest border-l border-outline-variant flex flex-col z-20 h-full overflow-y-auto no-scrollbar shadow-[-4px_0_15px_rgba(0,0,0,0.03)]">
      {/* Panel Header */}
      <div className="p-container-padding border-b border-outline-variant bg-surface-bright sticky top-0 z-10">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h2 className="text-xl font-bold text-on-surface tracking-tight">VH-8842-X</h2>
            <div className="text-sm text-on-surface-variant mt-1 flex items-center gap-1">
              <Icon name="attachment" className="w-4 h-4" />
              <span>Driver: John Doe</span>
            </div>
          </div>
          <ObjectStatus state="Critical" className="font-bold">
            IDLING
          </ObjectStatus>
        </div>
      </div>

      {/* Core Metrics Bento Grid */}
      <div className="p-container-padding grid grid-cols-2 gap-card-gap">
        <div className="bg-surface rounded-xl p-4 border border-outline-variant/50">
          <div className="flex items-center gap-2 mb-1">
            <Icon name="performance" className="text-outline w-4 h-4" />
            <Label className="text-outline">Speed</Label>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-on-surface">0</span>
            <span className="text-sm text-on-surface-variant">km/h</span>
          </div>
        </div>

        <div className="bg-surface rounded-xl p-4 border border-outline-variant/50">
          <div className="flex items-center gap-2 mb-1">
            <Icon name="history" className="text-outline w-4 h-4" />
            <Label className="text-outline">Duration</Label>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-on-surface">
              4<span className="text-sm font-medium text-on-surface-variant">h</span> 12
              <span className="text-sm font-medium text-on-surface-variant">m</span>
            </span>
          </div>
        </div>

        <div className="bg-surface rounded-xl p-4 border border-outline-variant/50">
          <div className="flex items-center gap-2 mb-1">
            <Icon name="mileage" className="text-outline w-4 h-4" />
            <Label className="text-outline">Fuel Used</Label>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-on-surface">142</span>
            <span className="text-sm text-on-surface-variant">L</span>
          </div>
        </div>

        <div className="bg-error-container/30 rounded-xl p-4 border border-error/20">
          <div className="flex items-center gap-2 mb-1">
            <Icon name="temperature" className="text-error w-4 h-4" />
            <Label className="text-error font-bold">Est. Carbon</Label>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-error">380</span>
            <span className="text-sm text-error">kg</span>
          </div>
        </div>
      </div>

      {/* Emissions Comparison Section */}
      <div className="px-container-padding pb-container-padding">
        <h3 className="text-md font-bold text-on-surface mb-6">Emissions Profile</h3>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-xs text-on-surface-variant flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-sm bg-primary inline-block"></span> Cruising (Productive)
              </span>
              <span className="font-mono text-sm text-on-surface font-medium">210 kg</span>
            </div>
            <ProgressIndicator value={55} displayValue="55%" />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="text-xs text-on-surface-variant flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-sm bg-error inline-block"></span> Idling (Waste)
              </span>
              <span className="font-mono text-sm text-error font-bold">170 kg</span>
            </div>
            <ProgressIndicator value={45} displayValue="45%" valueState="Negative" />
          </div>

          <div className="mt-2 pt-5 border-t border-outline-variant/50 flex items-start gap-3">
            <Icon name="warning" className="text-error w-4 h-4 mt-0.5" />
            <p className="text-xs leading-snug text-on-surface-variant">
              Vehicle has been idling for <span className="font-bold text-on-surface">45 minutes</span> at current location, generating excess emissions.
            </p>
          </div>
        </div>
      </div>

      {/* Cargo Manifest */}
      <div className="px-container-padding pb-container-padding mt-auto">
        <h3 className="text-md font-bold text-on-surface mb-3 flex items-center gap-2">
          <Icon name="product" className="w-5 h-5" /> Cargo Manifest
        </h3>
        <List>
          <ListItemStandard
            additionalText="x4"
            icon="attachment"
            description="ID: PLT-992-A"
          >
            Electronics Pallet
          </ListItemStandard>
          <ListItemStandard
            additionalText="x2"
            icon="attachment"
            description="ID: CRT-104-B"
          >
            Machine Parts
          </ListItemStandard>
        </List>
      </div>
    </aside>
  );
}
