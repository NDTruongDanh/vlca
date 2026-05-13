"use client";

import React from "react";

const dataset = [
  {
    name: "Cruising",
    value: 98,
    percentage: 65,
    color: "var(--color-status-success)",
  },
  {
    name: "Idling",
    value: 30,
    percentage: 20,
    color: "var(--color-status-warning)",
  },
  {
    name: "Offline",
    value: 22,
    percentage: 15,
    color: "var(--color-on-surface-variant)",
  },
];

export function FleetStatusDonut() {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;

  let accumulatedOffset = 0;

  return (
    <div className="col-span-12 md:col-span-4 bg-surface-container-lowest rounded-lg border border-outline-variant shadow-sm flex flex-col h-full">
      <div className="px-6 py-4 border-b border-outline-variant">
        <h2 className="text-headline-md text-on-surface">Fleet Status</h2>
      </div>

      <div className="p-6 flex flex-col items-center justify-center flex-1">
        {/* Custom SVG Donut */}
        <div className="relative w-48 h-48 mb-8">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full -rotate-90 transform"
          >
            {dataset.map((segment, index) => {
              const dashArray = `${(segment.percentage * circumference) / 100} ${circumference}`;
              const dashOffset = -accumulatedOffset;
              accumulatedOffset += (segment.percentage * circumference) / 100;

              return (
                <circle
                  key={index}
                  cx="50"
                  cy="50"
                  r={radius}
                  fill="transparent"
                  stroke={segment.color}
                  strokeWidth="10"
                  strokeDasharray={dashArray}
                  strokeDashoffset={dashOffset}
                  className="transition-all duration-500 ease-in-out"
                />
              );
            })}
          </svg>

          {/* Center Label */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-display text-on-surface leading-none">
              150
            </span>
            <span className="text-body-md font-medium text-on-surface-variant mt-1">
              Units
            </span>
          </div>
        </div>

        {/* Custom Legend */}
        <ul className="w-full space-y-4" aria-label="Fleet status legend">
          {dataset.map((item, index) => (
            <li key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="w-4 h-4 rounded-sm"
                  style={{ backgroundColor: item.color }}
                  aria-hidden="true"
                ></div>
                <span className="text-body-md font-medium text-on-surface">
                  {item.name}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-body-md font-semibold text-on-surface">
                  {item.percentage}%
                </span>
                <span className="text-label-sm text-on-surface-variant">
                  ({item.value})
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
