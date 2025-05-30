import type { Metadata } from "next";
import { CityOpsMetrics } from "@/components/scenario-modeling/CityOpsMetrics";
import React from "react";
import MonthlyIncidentsChart from "@/components/scenario-modeling/MonthlyIncidentsChart";
import StatisticsChart from "@/components/scenario-modeling/StatisticsChart";
import RecentOrders from "@/components/scenario-modeling/RecentOrders";
import DemographicCard from "@/components/scenario-modeling/HeatMapCard";

export const metadata: Metadata = {
  title:
    "Next.js Scenario Modeling Dashboard | MCC - Next.js Dashboard Template",
  description: "This is Next.js Home for MCC Dashboard Template",
};

export default function ScenarioModeling() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12 space-y-6">
        <CityOpsMetrics />

        <MonthlyIncidentsChart />
      </div>

      {/* <div className="col-span-12">
        <StatisticsChart />
      </div> */}

      <div className="col-span-12 xl:col-span-5">
        <DemographicCard />
      </div>

      <div className="col-span-12 xl:col-span-7">
        <RecentOrders />
      </div>
    </div>
  );
}
