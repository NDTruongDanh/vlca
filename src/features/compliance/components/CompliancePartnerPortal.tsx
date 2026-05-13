export function CompliancePartnerPortal() {
  return (
    <div className="px-container-padding py-6">
      <div className="mx-auto w-full max-w-[1400px]">
        <section className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-on-surface">
            Partner Portal
          </h2>
          <p className="mt-1 text-sm text-on-surface-variant">
            Manage partner onboarding, data submissions, and verification status
            for shared compliance reporting.
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-outline-variant bg-white p-4">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-on-surface-variant">
                Active Partners
              </p>
              <p className="mt-2 text-2xl font-semibold text-on-surface">142</p>
              <p className="mt-1 text-xs text-on-surface-variant">
                8 pending verification
              </p>
            </div>
            <div className="rounded-lg border border-outline-variant bg-white p-4">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-on-surface-variant">
                Submissions This Quarter
              </p>
              <p className="mt-2 text-2xl font-semibold text-on-surface">418</p>
              <p className="mt-1 text-xs text-on-surface-variant">
                96% validated
              </p>
            </div>
            <div className="rounded-lg border border-outline-variant bg-white p-4">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-on-surface-variant">
                Pending Invitations
              </p>
              <p className="mt-2 text-2xl font-semibold text-on-surface">12</p>
              <p className="mt-1 text-xs text-on-surface-variant">
                Awaiting partner action
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
