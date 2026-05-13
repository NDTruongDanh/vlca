import { Calendar, ChevronDown, Check } from "lucide-react";

const scopeOptions = [
  { id: "scope-1", label: "Scope 1 (Direct)", checked: true },
  { id: "scope-2", label: "Scope 2 (Indirect Energy)", checked: true },
  { id: "scope-3", label: "Scope 3 (Value Chain)", checked: false },
];

export function ReportExportDataConfiguration() {
  return (
    <section className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-on-surface">
        Data Configuration
      </h2>
      <p className="mt-1 text-sm text-on-surface-variant">
        Define the reporting boundary and emissions scopes for this export.
      </p>
      <div className="mt-4 grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className="text-sm text-on-surface-variant">
            Reporting Period <span className="text-status-error">*</span>
          </label>
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <input
                className="h-9 w-full rounded-md border border-outline-variant bg-white pl-3 pr-9 text-sm text-on-surface outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                type="text"
                defaultValue="01 Jan 2024"
              />
              <Calendar className="pointer-events-none absolute right-2 top-2.5 h-4 w-4 text-primary" />
            </div>
            <span className="text-on-surface-variant">-</span>
            <div className="relative flex-1">
              <input
                className="h-9 w-full rounded-md border border-outline-variant bg-white pl-3 pr-9 text-sm text-on-surface outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                type="text"
                defaultValue="31 Dec 2024"
              />
              <Calendar className="pointer-events-none absolute right-2 top-2.5 h-4 w-4 text-primary" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-on-surface-variant">
            Organizational Boundary
          </label>
          <div className="relative">
            <select className="h-9 w-full appearance-none rounded-md border border-outline-variant bg-white pl-3 pr-9 text-sm text-on-surface outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary">
              <option>Global Fleet Operations (All Entities)</option>
              <option>EMEA Logistics Hub</option>
              <option>APAC Distribution Network</option>
              <option>North America Freight</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-2 top-2.5 h-4 w-4 text-primary" />
          </div>
        </div>

        <div className="flex flex-col gap-3 md:col-span-2">
          <label className="text-sm text-on-surface-variant">
            Emissions Scopes
          </label>
          <div className="flex flex-wrap gap-6">
            {scopeOptions.map((scope) => (
              <label
                key={scope.id}
                className="flex items-center gap-2 text-sm text-on-surface"
              >
                <span className="relative inline-flex h-4 w-4 items-center justify-center">
                  <input
                    className="peer sr-only"
                    type="checkbox"
                    defaultChecked={scope.checked}
                  />
                  <span className="h-4 w-4 rounded border border-outline-variant bg-white transition-colors peer-checked:border-primary peer-checked:bg-primary"></span>
                  <Check className="absolute h-3 w-3 text-white opacity-0 transition-opacity peer-checked:opacity-100" />
                </span>
                <span>{scope.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
