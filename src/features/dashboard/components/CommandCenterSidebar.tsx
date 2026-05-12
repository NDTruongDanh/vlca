export function CommandCenterSidebar() {
  return (
    <nav className="fixed left-0 top-0 h-full w-60 z-40 border-r border-outline-variant bg-surface-container-lowest flex flex-col py-4 space-y-1">
      <div className="px-6 pb-6 pt-2 flex items-center gap-3 border-b border-outline-variant mb-4">
        <div className="w-10 h-10 rounded bg-primary-container flex items-center justify-center text-on-primary-container">
          <span className="material-symbols-outlined fill">local_shipping</span>
        </div>
        <div>
          <h1 className="font-bold text-primary">Carbon Ledger</h1>
          <p className="text-xs text-on-surface-variant">Enterprise Logistics</p>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        <a className="flex items-center gap-3 px-4 py-3 bg-primary-container text-on-primary-container rounded-lg mx-2 my-1 active:scale-95 transition-transform" href="#">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="font-semibold">Command Center</span>
        </a>
        <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg mx-2 my-1 transition-colors duration-200 active:scale-95" href="#">
          <span className="material-symbols-outlined">sensors</span>
          <span className="font-semibold">Telemetry</span>
        </a>
        <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg mx-2 my-1 transition-colors duration-200 active:scale-95" href="#">
          <span className="material-symbols-outlined">local_shipping</span>
          <span className="font-semibold">Logistics Hub</span>
        </a>
        <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg mx-2 my-1 transition-colors duration-200 active:scale-95" href="#">
          <span className="material-symbols-outlined">verified_user</span>
          <span className="font-semibold">Compliance Studio</span>
        </a>
      </div>
      <div className="border-t border-outline-variant pt-2 mt-auto">
        <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg mx-2 my-1 transition-colors duration-200 active:scale-95" href="#">
          <span className="material-symbols-outlined">settings</span>
          <span className="font-semibold">Settings</span>
        </a>
        <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg mx-2 my-1 transition-colors duration-200 active:scale-95" href="#">
          <span className="material-symbols-outlined">help</span>
          <span className="font-semibold">Help Center</span>
        </a>
      </div>
    </nav>
  );
}
