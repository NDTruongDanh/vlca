import { Maximize2 } from "lucide-react";

const formatOptions = [
  { id: "pdf", label: "PDF" },
  { id: "excel", label: "Excel" },
  { id: "xml", label: "XML" },
];

export function ReportExportPreviewPanel() {
  return (
    <section className="flex h-full min-h-0 flex-col overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest shadow-sm">
      <div className="flex items-center justify-between border-b border-outline-variant bg-white p-4">
        <h2 className="text-body-lg font-semibold text-on-surface">
          Document Preview
        </h2>
        <button
          type="button"
          aria-label="Fullscreen preview"
          className="rounded-md p-1 text-primary transition-colors hover:bg-surface-container-low"
        >
          <Maximize2 className="h-4 w-4" />
        </button>
      </div>

      <div className="flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto bg-surface-container-low p-4">
        <div className="relative min-h-0 flex-1 overflow-hidden rounded-lg border border-outline-variant bg-white shadow-sm">
          <img
            alt="Report preview"
            className="h-full w-full object-cover object-top"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVIN4zBZ7sIrEuRCpKSS7PN-wOZGJgGl3n2Sjt7PLyG4i8sMhJoc60NB-vwK6jQxdvTFVf8iOJoyPrpSAvJpgwEf0csdYBKrS9eg3ueYcJzbV0CBnaVZBpjbZv_8Vi-WSR0W4awrOxXI_Vcytp-PvyjFI7Ifd5DoUfp3NHo1VK-3N3OuvrVuqM7Kn91Xz9wiYueAcMcgD6ZeEXquCUdzPyjWRusYrKGJKyG_PY48N5CnsHIA_HEB2FEwqHSfKvisXkOMMQJf9HuGs"
          />
          <div className="absolute left-3 top-3 rounded-full border border-status-success/20 bg-white/90 px-2 py-1 text-label-sm text-status-success shadow-sm">
            Ready to Export
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-label-md text-on-surface-variant">
            Export Format
          </label>
          <div className="flex overflow-hidden rounded-md border border-primary">
            {formatOptions.map((format) => (
              <label
                key={format.id}
                className="flex-1 cursor-pointer border-r border-primary last:border-r-0"
              >
                <input
                  className="peer sr-only"
                  type="radio"
                  name="export-format"
                  defaultChecked={format.id === "pdf"}
                />
                <span className="block px-3 py-1.5 text-center text-label-md font-semibold text-primary transition-colors peer-checked:bg-primary peer-checked:text-white">
                  {format.label}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 border-t border-outline-variant bg-white p-4">
        <button
          type="button"
          className="h-9 rounded-md bg-primary text-body-md font-semibold text-white shadow-sm transition-colors hover:bg-primary-container"
        >
          Generate Report
        </button>
      </div>
    </section>
  );
}
