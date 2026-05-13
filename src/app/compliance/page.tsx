"use client";

import { useState } from "react";
import { ComplianceEmissionsData } from "@/features/compliance/components/ComplianceEmissionsData";
import { CompliancePartnerPortal } from "@/features/compliance/components/CompliancePartnerPortal";
import { ReportExportTemplateSelector } from "@/features/compliance/components/ReportExportTemplateSelector";
import { ReportExportDataConfiguration } from "@/features/compliance/components/ReportExportDataConfiguration";
import { ReportExportPreviewPanel } from "@/features/compliance/components/ReportExportPreviewPanel";

type ComplianceTabKey = "emissions" | "partner" | "report";

const tabConfig: Record<
  ComplianceTabKey,
  { label: string; title: string; description: string }
> = {
  emissions: {
    label: "Emissions Data",
    title: "Emissions Data",
    description:
      "Track verified emissions, partner submissions, and value-chain coverage for compliance readiness.",
  },
  partner: {
    label: "Partner Portal",
    title: "Partner Portal",
    description:
      "Coordinate partner onboarding and monitor incoming submissions across your supply chain.",
  },
  report: {
    label: "Report Export",
    title: "Export Compliance Report",
    description:
      "Configure your data boundaries and select a recognized template to generate auditable emissions documentation.",
  },
};

export default function CompliancePage() {
  const [activeTab, setActiveTab] = useState<ComplianceTabKey>("emissions");
  const activeCopy = tabConfig[activeTab];

  return (
    <div className="flex h-full flex-col bg-background">
      <section className="bg-surface-container-lowest px-container-padding pt-6">
        <div className="mx-auto w-full max-w-[1400px]">
          <h1 className="text-headline-lg text-on-surface">
            {activeCopy.title}
          </h1>
          <div className="mt-4 border-b border-outline-variant" role="tablist">
            <div className="flex gap-6 overflow-x-auto">
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "emissions"}
                onClick={() => setActiveTab("emissions")}
                className={`-mb-px border-b-2 px-1 pb-3 text-label-md transition-colors hover:text-on-surface ${
                  activeTab === "emissions"
                    ? "border-primary font-semibold text-primary"
                    : "border-transparent text-on-surface-variant"
                }`}
              >
                Emissions Data
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "partner"}
                onClick={() => setActiveTab("partner")}
                className={`-mb-px border-b-2 px-1 pb-3 text-label-md transition-colors hover:text-on-surface ${
                  activeTab === "partner"
                    ? "border-primary font-semibold text-primary"
                    : "border-transparent text-on-surface-variant"
                }`}
              >
                Partner Portal
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "report"}
                onClick={() => setActiveTab("report")}
                className={`-mb-px border-b-2 px-1 pb-3 text-label-md transition-colors hover:text-on-surface ${
                  activeTab === "report"
                    ? "border-primary font-semibold text-primary"
                    : "border-transparent text-on-surface-variant"
                }`}
              >
                Report Export
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="flex-1 overflow-y-auto">
        {activeTab === "emissions" && <ComplianceEmissionsData />}
        {activeTab === "partner" && <CompliancePartnerPortal />}
        {activeTab === "report" && (
          <section className="px-container-padding py-6">
            <div className="mx-auto w-full max-w-[1400px]">
              <div className="relative flex flex-col gap-6 xl:pr-[384px]">
                <div className="flex min-w-0 flex-col gap-6">
                  <ReportExportTemplateSelector />
                  <ReportExportDataConfiguration />
                </div>
                <div className="w-full xl:absolute xl:right-0 xl:top-0 xl:h-full xl:w-[360px]">
                  <ReportExportPreviewPanel />
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
