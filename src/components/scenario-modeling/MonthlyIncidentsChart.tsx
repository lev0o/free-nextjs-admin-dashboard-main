"use client";

import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import ChartTab from "../common/ChartTab";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function StatisticsChart() {
  const now = new Date();

  const totalDays = 40;
  const pastDays = 30;
  const futureDays = 10;

  // Generate 40 sequential dates: past 30 to future 10
  const datePoints: Date[] = Array.from({ length: totalDays }, (_, i) => {
    const date = new Date(now);
    date.setDate(now.getDate() - pastDays + i);
    return date;
  });

  // Actual data for past 30 days
  const actualSeries = datePoints.map((date, i) => {
    if (i < pastDays) {
      return {
        x: date,
        y: Math.floor(180 + Math.random() * 30 - 15),
      };
    } else if (i === pastDays) {
      // last actual point, also serves as handoff to forecast
      return {
        x: date,
        y: Math.floor(180 + Math.random() * 30 - 15),
      };
    } else {
      return {
        x: date,
        y: null,
      };
    }
  });

  // Forecast series starts at the last actual point and continues
  const lastActualY = actualSeries[pastDays].y!;
  const forecastSeries = datePoints.map((date, i) => {
    if (i < pastDays) {
      return { x: date, y: null };
    } else if (i === pastDays) {
      return { x: date, y: lastActualY }; // continue from actual
    } else {
      return {
        x: date,
        y: Math.floor(160 + Math.random() * 30 - 15),
      };
    }
  });

  const options: ApexOptions = {
    chart: {
      fontFamily: "Outfit, sans-serif",
      height: 310,
      type: "line",
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    stroke: {
      curve: "smooth",
      width: [2, 2],
      dashArray: [0, 5], // dotted forecast
    },
    colors: ["#2563EB", "#DC2626"],
    dataLabels: { enabled: false },
    markers: { size: 0 },
    xaxis: {
      type: "datetime",
      labels: {
        formatter: function (value: string) {
          const date = new Date(value);
          return date.toLocaleDateString("en-US", {
            day: "2-digit",
            month: "short",
          });
        },
        style: {
          fontSize: "12px",
          colors: "#6B7280",
        },
      },
      tickAmount: 10,
    },
    yaxis: {
      labels: {
        style: {
          fontSize: "12px",
          colors: ["#6B7280"],
        },
      },
    },
    tooltip: {
      x: {
        format: "dd MMM",
      },
    },
    grid: {
      yaxis: {
        lines: { show: true },
      },
      xaxis: {
        lines: { show: false },
      },
    },
    legend: { show: false },
  };

  const series = [
    {
      name: "Actual",
      data: actualSeries,
    },
    {
      name: "Forecast",
      data: forecastSeries,
    },
  ];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-5 pb-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div className="flex flex-col gap-5 mb-6 sm:flex-row sm:justify-between">
        <div className="w-full">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Incident Forecast
          </h3>
          <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
            Last 30 days of incidents and next 10-day forecast
          </p>
        </div>
        <div className="flex items-start w-full gap-3 sm:justify-end">
          <ChartTab />
        </div>
      </div>

      <div className="max-w-full overflow-x-auto custom-scrollbar">
        <div className="min-w-[1000px] xl:min-w-full">
          <ReactApexChart
            options={options}
            series={series}
            type="line"
            height={310}
          />
        </div>
      </div>
    </div>
  );
}
