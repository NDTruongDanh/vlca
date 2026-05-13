import { Globe, LayoutGrid, ShieldCheck } from "lucide-react";

const templates = [
  {
    id: "iso",
    title: "ISO 14064-1",
    description:
      "Standardized corporate carbon footprint calculation suitable for external auditing and verification.",
    icon: Globe,
  },
  {
    id: "cbam",
    title: "CBAM Template",
    description:
      "EU Carbon Border Adjustment Mechanism compliant format for imported goods declarations.",
    icon: ShieldCheck,
  },
  {
    id: "custom",
    title: "Custom Template",
    description:
      "Flexible layout allowing selection of specific metrics and internal corporate branding.",
    icon: LayoutGrid,
  },
];

export function ReportExportTemplateSelector() {
  return (
    <section className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6 shadow-sm">
      <h2 className="text-headline-md text-on-surface">
        Select Report Template
      </h2>
      <p className="mt-1 text-body-md text-on-surface-variant">
        Choose a recognized reporting format for your compliance submission.
      </p>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        {templates.map((template) => {
          const Icon = template.icon;
          return (
            <label key={template.id} className="block h-full cursor-pointer">
              <div className="relative h-full">
                <input
                  className="peer sr-only"
                  type="radio"
                  name="report-template"
                  defaultChecked={template.id === "iso"}
                />
                <span className="pointer-events-none absolute right-4 top-4 h-4 w-4 rounded-full border border-outline-variant bg-white transition-colors peer-checked:border-primary peer-checked:bg-primary"></span>
                <div className="flex h-full flex-col rounded-xl border border-outline-variant bg-white p-4 transition-all duration-200 hover:shadow-md peer-checked:border-primary peer-checked:bg-primary/5">
                  <div className="flex items-start justify-between">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-3 text-body-lg font-semibold text-on-surface">
                    {template.title}
                  </h3>
                  <p className="mt-1 text-body-md leading-snug text-on-surface-variant">
                    {template.description}
                  </p>
                </div>
              </div>
            </label>
          );
        })}
      </div>
    </section>
  );
}
