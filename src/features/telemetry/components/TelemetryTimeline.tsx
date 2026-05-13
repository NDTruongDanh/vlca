"use client";

export function TelemetryTimeline() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-24 bg-surface-container-lowest/95 backdrop-blur-md border-t border-outline-variant px-6 py-3 flex flex-col justify-center">
      <div className="flex justify-between items-center mb-2">
        <span className="text-label-sm text-on-surface-variant uppercase">
          Route Timeline: VH-8842-X
        </span>
        <span className="text-label-sm tabular-nums text-outline">
          Today, 08:00 - Present
        </span>
      </div>
      <div className="relative h-2 bg-surface-container-highest rounded-full w-full">
        {/* Segments */}
        <div className="absolute left-0 top-0 h-full bg-[#10B981] rounded-l-full w-[40%]"></div>
        <div className="absolute left-[40%] top-0 h-full bg-[#F59E0B] w-[15%]"></div>
        <div className="absolute left-[55%] top-0 h-full bg-[#10B981] w-[25%]"></div>
        <div className="absolute left-[80%] top-0 h-full bg-error w-[10%] rounded-r-full"></div>
        {/* Current Time Marker */}
        <div className="absolute left-[90%] top-1/2 -translate-y-1/2 w-4 h-4 bg-surface-container-lowest border-2 border-primary rounded-full shadow"></div>
      </div>
      <div className="flex justify-between mt-1 px-1">
        <span className="text-label-sm text-outline">08:00 AM</span>
        <span className="text-label-sm text-outline">10:00 AM</span>
        <span className="text-label-sm text-outline">12:00 PM</span>
        <span className="text-label-sm text-primary font-medium">
          Current (01:15 PM)
        </span>
      </div>
    </div>
  );
}
