"use client";

import { useEffect, useState } from "react";
import {
  Search,
  Filter,
  ArrowUpDown,
  Settings,
  MoreVertical,
  CheckCircle2,
  AlertTriangle,
  Info,
  X,
} from "lucide-react";

const statusConfig = {
  Verified: {
    icon: CheckCircle2,
    className: "text-status-success",
  },
  Active: {
    icon: Info,
    className: "text-primary",
  },
  Pending: {
    icon: AlertTriangle,
    className: "text-status-warning",
  },
} as const;

type PartnerStatus = keyof typeof statusConfig;

const partnerRows: Array<{
  initials: string;
  company: string;
  country: string;
  lastShared: string;
  dataShared: string;
  format: string;
  status: PartnerStatus;
}> = [
  {
    initials: "NV",
    company: "Nestle Vietnam",
    country: "VN",
    lastShared: "Oct 24, 2023",
    dataShared: "Q3 Scope 3",
    format: "PDF/XML",
    status: "Verified",
  },
  {
    initials: "US",
    company: "Unilever SEA",
    country: "SG",
    lastShared: "Oct 15, 2023",
    dataShared: "YTD Freight",
    format: "API",
    status: "Active",
  },
  {
    initials: "MG",
    company: "Masan Group",
    country: "VN",
    lastShared: "Sep 30, 2023",
    dataShared: "Q2 Scope 1 & 2",
    format: "CSV",
    status: "Pending",
  },
  {
    initials: "DS",
    company: "DB Schenker",
    country: "DE",
    lastShared: "Oct 20, 2023",
    dataShared: "Lane Specific",
    format: "API",
    status: "Verified",
  },
];

export function CompliancePartnerPortal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!isModalOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  return (
    <div className="px-container-padding py-6">
      <div className="w-full">
        <section className="overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest shadow-sm">
          <div className="flex flex-col gap-3 border-b border-outline-variant bg-surface-container-lowest p-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-headline-md text-on-surface">
                Ecosystem Partners
              </h2>
              <p className="mt-1 text-body-md text-on-surface-variant">
                Monitor shared emissions data and partner verification status.
              </p>
            </div>
            <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center md:w-auto">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-full rounded-md bg-primary-container px-4 py-2 text-body-md font-semibold text-white shadow-sm transition-colors hover:bg-primary-container/90 sm:w-auto"
              >
                Add Partner
              </button>
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-on-surface-variant" />
                <input
                  aria-label="Search partners"
                  type="text"
                  placeholder="Search partners..."
                  className="w-full rounded-md border border-outline-variant bg-surface-container-lowest py-2 pl-9 pr-3 text-body-md text-on-surface outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  aria-label="Filter partners"
                  className="rounded-md p-2 text-primary transition-colors hover:bg-primary-container/20"
                >
                  <Filter className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  aria-label="Sort partners"
                  className="rounded-md p-2 text-primary transition-colors hover:bg-primary-container/20"
                >
                  <ArrowUpDown className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  aria-label="Table settings"
                  className="rounded-md p-2 text-primary transition-colors hover:bg-primary-container/20"
                >
                  <Settings className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-[800px] w-full border-collapse text-left text-body-md">
              <thead className="bg-surface-container-low text-label-sm uppercase text-on-surface-variant">
                <tr>
                  <th className="p-3 pl-4">Company</th>
                  <th className="p-3">Country</th>
                  <th className="p-3">Last Shared</th>
                  <th className="p-3">Data Shared (tCO2e)</th>
                  <th className="p-3">Format</th>
                  <th className="p-3">Status</th>
                  <th className="p-3 pr-4 text-right"></th>
                </tr>
              </thead>
              <tbody className="text-on-surface">
                {partnerRows.map((row, index) => {
                  const status = statusConfig[row.status];
                  const StatusIcon = status.icon;
                  return (
                    <tr
                      key={row.company}
                      className={`group h-10 border-b border-outline-variant transition-colors hover:bg-surface-container-low ${
                        index % 2 === 1 ? "bg-surface-container-lowest" : ""
                      }`}
                    >
                      <td className="p-3 pl-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-surface-container-highest text-label-sm text-on-surface-variant">
                            {row.initials}
                          </div>
                          <button className="text-primary transition-colors hover:underline">
                            {row.company}
                          </button>
                        </div>
                      </td>
                      <td className="p-3">{row.country}</td>
                      <td className="p-3 text-on-surface-variant">
                        {row.lastShared}
                      </td>
                      <td className="p-3">{row.dataShared}</td>
                      <td className="p-3 text-on-surface-variant">
                        {row.format}
                      </td>
                      <td className="p-3">
                        <span
                          className={`inline-flex items-center gap-1 text-label-sm ${
                            status.className
                          }`}
                        >
                          <StatusIcon className="h-4 w-4" />
                          {row.status}
                        </span>
                      </td>
                      <td className="p-3 pr-4 text-right">
                        <button
                          type="button"
                          aria-label={`Actions for ${row.company}`}
                          className="rounded-sm p-1.5 text-primary opacity-0 transition-colors hover:bg-primary-container/20 group-hover:opacity-100"
                        >
                          <MoreVertical className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </div>
      {isModalOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-surface/70 p-4 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="add-partner-title"
            className="w-full max-w-lg rounded-xl border border-outline-variant bg-surface-container-lowest shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-outline-variant px-5 py-4">
              <div>
                <h3
                  id="add-partner-title"
                  className="text-headline-md text-on-surface"
                >
                  Add Partner
                </h3>
                <p className="mt-1 text-body-md text-on-surface-variant">
                  Invite a new ecosystem partner to share emissions data.
                </p>
              </div>
              <button
                type="button"
                aria-label="Close add partner dialog"
                className="rounded-full p-2 text-on-surface-variant transition-colors hover:bg-surface-container-high"
                onClick={() => setIsModalOpen(false)}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-4 px-5 py-4">
              <label className="flex flex-col gap-2 text-label-md text-on-surface">
                Partner name
                <input
                  type="text"
                  placeholder="e.g. ACME Logistics"
                  className="rounded-md border border-outline-variant bg-surface-container-lowest px-3 py-2 text-body-md text-on-surface outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </label>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-label-md text-on-surface">
                  Country
                  <input
                    type="text"
                    placeholder="Country code"
                    className="rounded-md border border-outline-variant bg-surface-container-lowest px-3 py-2 text-body-md text-on-surface outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </label>
                <label className="flex flex-col gap-2 text-label-md text-on-surface">
                  Data format
                  <input
                    type="text"
                    placeholder="API, CSV, PDF"
                    className="rounded-md border border-outline-variant bg-surface-container-lowest px-3 py-2 text-body-md text-on-surface outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </label>
              </div>
              <label className="flex flex-col gap-2 text-label-md text-on-surface">
                Contact email
                <input
                  type="email"
                  placeholder="name@partner.com"
                  className="rounded-md border border-outline-variant bg-surface-container-lowest px-3 py-2 text-body-md text-on-surface outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </label>
            </div>
            <div className="flex flex-col gap-2 border-t border-outline-variant px-5 py-4 sm:flex-row sm:justify-end">
              <button
                type="button"
                className="w-full rounded-md border border-outline-variant px-4 py-2 text-body-md font-semibold text-on-surface transition-colors hover:bg-surface-container-high sm:w-auto"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="w-full rounded-md bg-primary px-4 py-2 text-body-md font-semibold text-on-primary shadow-sm transition-colors hover:bg-primary/90 sm:w-auto"
                onClick={() => setIsModalOpen(false)}
              >
                Send Invite
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
