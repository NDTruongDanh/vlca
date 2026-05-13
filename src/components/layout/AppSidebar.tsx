"use client";

import { Truck, LayoutDashboard, Radio, ShieldCheck, Settings, HelpCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Command Center", icon: LayoutDashboard },
  { href: "/telemetry", label: "Telemetry", icon: Radio },
  { href: "/logistics", label: "Logistics Hub", icon: Truck },
  { href: "/compliance", label: "Compliance Studio", icon: ShieldCheck },
];

const footerItems = [
  { href: "/settings", label: "Settings", icon: Settings },
  { href: "/help", label: "Help Center", icon: HelpCircle },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <nav className="fixed left-0 top-0 h-full w-60 z-40 border-r border-outline-variant bg-surface-container-lowest flex flex-col py-4 space-y-1" aria-label="Main Navigation">
      <div className="px-6 pb-6 pt-2 flex items-center gap-3 border-b border-outline-variant mb-4">
        <div className="w-10 h-10 rounded bg-primary flex items-center justify-center text-on-primary" role="img" aria-label="Carbon Ledger Logo">
          <Truck size={24} fill="currentColor" />
        </div>
        <div>
          <h1 className="font-bold text-primary">Carbon Ledger</h1>
          <p className="text-xs text-on-surface-variant">Enterprise Logistics</p>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg mx-2 my-1 transition-all motion-safe:active:scale-95 ${
                isActive
                  ? "bg-primary-container text-on-primary-container"
                  : "text-on-surface-variant hover:bg-surface-container-high transition-colors duration-200"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon size={20} fill={isActive ? "currentColor" : "none"} />
              <span className="font-semibold">{item.label}</span>
            </Link>
          );
        })}
      </div>
      <div className="border-t border-outline-variant pt-2 mt-auto">
        {footerItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg mx-2 my-1 transition-all motion-safe:active:scale-95 ${
                isActive
                  ? "bg-primary-container text-on-primary-container"
                  : "text-on-surface-variant hover:bg-surface-container-high transition-colors duration-200"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon size={20} />
              <span className="font-semibold">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
