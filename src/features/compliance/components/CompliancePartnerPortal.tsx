import {
  Search,
  Filter,
  ArrowUpDown,
  Settings,
  MoreVertical,
  CheckCircle2,
  AlertTriangle,
  Info,
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
  return (
    <div className="px-container-padding py-6">
      <div className="mx-auto w-full max-w-[1200px]">
        <section className="overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest shadow-sm">
          <div className="flex flex-col gap-3 border-b border-outline-variant bg-surface-container-lowest p-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-on-surface">
                Ecosystem Partners ({partnerRows.length})
              </h2>
              <p className="mt-1 text-sm text-on-surface-variant">
                Monitor shared emissions data and partner verification status.
              </p>
            </div>
            <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center md:w-auto">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-on-surface-variant" />
                <input
                  aria-label="Search partners"
                  type="text"
                  placeholder="Search partners..."
                  className="w-full rounded-md border border-outline-variant bg-surface-container-lowest py-2 pl-9 pr-3 text-sm text-on-surface outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
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
            <table className="min-w-[800px] w-full border-collapse text-left text-sm">
              <thead className="bg-surface-container-low text-[11px] uppercase tracking-wide text-on-surface-variant">
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
                          <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-surface-container-highest text-[11px] font-semibold text-on-surface-variant">
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
                          className={`inline-flex items-center gap-1 text-[11px] font-semibold ${
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
    </div>
  );
}
