import { Truck, LayoutDashboard, Radio, ShieldCheck, Settings, HelpCircle } from "lucide-react";

export function CommandCenterSidebar() {
  return (
    <nav className="fixed left-0 top-0 h-full w-60 z-40 border-r border-outline-variant bg-surface-container-lowest flex flex-col py-4 space-y-1" aria-label="Main Navigation">
      <div className="px-6 pb-6 pt-2 flex items-center gap-3 border-b border-outline-variant mb-4">
        <div className="w-10 h-10 rounded bg-primary-container flex items-center justify-center text-on-primary-container" role="img" aria-label="Carbon Ledger Logo">
          <Truck size={24} fill="currentColor" />
        </div>
        <div>
          <h1 className="font-bold text-primary">Carbon Ledger</h1>
          <p className="text-xs text-on-surface-variant">Enterprise Logistics</p>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        <a 
          className="flex items-center gap-3 px-4 py-3 bg-primary-container text-on-primary-container rounded-lg mx-2 my-1 transition-transform motion-safe:active:scale-95" 
          href="#"
          aria-current="page"
        >
          <LayoutDashboard size={20} />
          <span className="font-semibold">Command Center</span>
        </a>
        <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg mx-2 my-1 transition-colors duration-200 motion-safe:active:scale-95" href="#">
          <Radio size={20} />
          <span className="font-semibold">Telemetry</span>
        </a>
        <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg mx-2 my-1 transition-colors duration-200 motion-safe:active:scale-95" href="#">
          <Truck size={20} />
          <span className="font-semibold">Logistics Hub</span>
        </a>
        <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg mx-2 my-1 transition-colors duration-200 motion-safe:active:scale-95" href="#">
          <ShieldCheck size={20} />
          <span className="font-semibold">Compliance Studio</span>
        </a>
      </div>
      <div className="border-t border-outline-variant pt-2 mt-auto">
        <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg mx-2 my-1 transition-colors duration-200 motion-safe:active:scale-95" href="#">
          <Settings size={20} />
          <span className="font-semibold">Settings</span>
        </a>
        <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg mx-2 my-1 transition-colors duration-200 motion-safe:active:scale-95" href="#">
          <HelpCircle size={20} />
          <span className="font-semibold">Help Center</span>
        </a>
      </div>
    </nav>
  );
}
