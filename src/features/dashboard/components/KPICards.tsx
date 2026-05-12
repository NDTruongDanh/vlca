export function KPICards() {
  const kpis = [
    { title: "Real-Time CO2e", value: "1,248", unit: "tons", trend: "4.2% vs Last Week", trendIcon: "arrow_downward", trendColor: "text-status-success", icon: "co2" },
    { title: "Today's Emissions", value: "42.5", unit: "tons", trend: "1.1% vs Avg", trendIcon: "arrow_upward", trendColor: "text-status-warning", icon: "today", showSpark: true },
    { title: "This Month", value: "856.2", unit: "tons", trend: "On Track", trendIcon: "check_circle", trendColor: "text-status-success", icon: "calendar_month", showProgress: true, progress: 50 },
    { title: "Fleet Active", value: "142", unit: "/ 150", trend: "Live Sync Active", trendIcon: "sync", trendColor: "text-on-surface-variant", icon: "local_shipping" }
  ];

  return (
    <div className="col-span-12 grid grid-cols-1 md:grid-cols-4 gap-card-gap">
      {kpis.map((kpi, idx) => (
        <div key={idx} className="bg-surface-container-lowest rounded-lg border border-outline-variant shadow-sm p-4 flex flex-col justify-between">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xs font-semibold text-on-surface-variant uppercase">{kpi.title}</h3>
            <span className="material-symbols-outlined text-on-primary-container text-xl">{kpi.icon}</span>
          </div>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold text-on-surface">{kpi.value}</span>
            <span className="text-sm text-on-surface-variant pb-1">{kpi.unit}</span>
          </div>
          <div className={`mt-2 flex items-center gap-1 ${kpi.trendColor} text-xs font-semibold`}>
            <span className="material-symbols-outlined text-[16px]">{kpi.trendIcon}</span>
            <span>{kpi.trend}</span>
          </div>
          {kpi.showSpark && (
            <div className="h-1 w-full bg-surface-container-high rounded mt-3 overflow-hidden flex">
              <div className="h-full bg-status-warning w-3/4"></div>
            </div>
          )}
          {kpi.showProgress && (
            <div className="h-1 w-full bg-surface-container-high rounded mt-3 overflow-hidden flex">
              <div className="h-full bg-status-success w-1/2"></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
