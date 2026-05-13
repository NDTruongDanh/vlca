import { DispatchPlanning } from "@/features/logistics/components/DispatchPlanning";

export const metadata = {
  title: "Dispatch Planning - Carbon Ledger Logistics",
  description:
    "Manage daily loads, optimize routes, and minimize fleet emissions",
};

export default function LogisticsPage() {
  return <DispatchPlanning />;
}
