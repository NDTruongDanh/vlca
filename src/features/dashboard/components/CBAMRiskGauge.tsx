import { AlertTriangle } from "lucide-react";
import { Button } from "@ui5/webcomponents-react/Button";

export function CBAMRiskGauge() {
  return (
    <div className="col-span-12 md:col-span-8 bg-surface-container-lowest rounded-lg border border-outline-variant shadow-sm flex flex-col">
      <div className="px-6 py-4 border-b border-outline-variant flex justify-between items-center">
        <h2 className="text-headline-md text-on-surface">CBAM Exposure Risk</h2>
        <Button
          design="Transparent"
          className="text-body-md font-semibold active:scale-95 transition-transform motion-safe:active:scale-95"
          accessibleName="View full compliance report"
        >
          View Compliance Report
        </Button>
      </div>
      <div className="p-6 flex flex-col md:flex-row gap-8 items-center justify-center flex-1">
        <div className="flex-1 space-y-6 w-full">
          <div>
            <p className="text-label-sm text-on-surface-variant uppercase mb-1">
              Est. EU Carbon Tax Liability (YTD)
            </p>
            <div className="flex items-end gap-2">
              <span
                className="text-display text-status-error"
                aria-label="Liability: 45,200 Euros"
              >
                € 45,200
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface-container-low p-3 rounded border border-outline-variant/50">
              <p className="text-label-sm text-on-surface-variant mb-1">
                Projected Monthly
              </p>
              <p className="text-body-lg font-semibold text-on-surface">
                € 5,800
              </p>
            </div>
            <div className="bg-surface-container-low p-3 rounded border border-outline-variant/50">
              <p className="text-label-sm text-on-surface-variant mb-1">
                Projected Yearly
              </p>
              <p className="text-body-lg font-semibold text-on-surface">
                € 69,600
              </p>
            </div>
          </div>
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-error-container text-on-error-container rounded-full border border-status-error/20"
            role="alert"
          >
            <AlertTriangle size={18} aria-hidden="true" />
            <span className="text-label-sm uppercase">HIGH SEVERITY</span>
          </div>
        </div>
        <div
          className="relative w-48 h-24 flex-shrink-0 flex items-end justify-center"
          role="meter"
          aria-valuenow={85}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Allowance usage gauge"
        >
          <div
            className="absolute top-0 left-0 w-full h-full gauge-meter"
            aria-hidden="true"
          ></div>
          <div
            className="absolute top-2 left-2 w-[11rem] h-[5.5rem] gauge-mask flex flex-col items-center justify-end pb-2"
            aria-hidden="true"
          >
            <span className="text-headline-md text-on-surface">85%</span>
            <span className="text-label-sm text-on-surface-variant">
              Allowance Used
            </span>
          </div>
          <div
            className="absolute bottom-0 w-1 h-16 bg-on-surface origin-bottom transform rotate-[60deg] rounded-t-full transition-transform duration-1000 ease-out"
            aria-hidden="true"
          ></div>
          <div
            className="absolute bottom-[-4px] w-3 h-3 bg-on-surface rounded-full"
            aria-hidden="true"
          ></div>
        </div>
      </div>
    </div>
  );
}
