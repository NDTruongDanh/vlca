import { CommandCenterSidebar } from "@/features/dashboard/components/CommandCenterSidebar";
import { CommandCenterHeader } from "@/features/dashboard/components/CommandCenterHeader";
import { KPICards } from "@/features/dashboard/components/KPICards";
import { CBAMRiskGauge } from "@/features/dashboard/components/CBAMRiskGauge";
import { FleetStatusDonut } from "@/features/dashboard/components/FleetStatusDonut";
import { OperationalAlertsTable } from "@/features/dashboard/components/OperationalAlertsTable";
import { SustainabilityScorecard } from "@/features/dashboard/components/SustainabilityScorecard";

export default function Home() {
  return (
    <div className="bg-background text-on-surface min-h-screen flex overflow-hidden">
      <CommandCenterSidebar />
      
      <div className="flex-1 flex flex-col ml-60 h-screen">
        <CommandCenterHeader />
        
        <main className="flex-1 overflow-y-auto mt-16 p-container-padding bg-background">
          <div className="grid grid-cols-12 gap-card-gap max-w-[1600px] mx-auto">
            {/* Section 1: Carbon Footprint Overview */}
            <KPICards />

            {/* Main Middle Row */}
            <CBAMRiskGauge />
            <FleetStatusDonut />

            {/* Bottom Row */}
            <OperationalAlertsTable />
            <SustainabilityScorecard />
          </div>
          
          {/* Bottom padding for scroll */}
          <div className="h-8"></div>
        </main>
      </div>
    </div>
  );
}
