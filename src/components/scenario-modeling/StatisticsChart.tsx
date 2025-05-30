"use client";

import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import ChartTab from "../common/ChartTab";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function StatisticsChart() {
  const currentMonthIndex = new Date().getMonth(); // 0-indexed

  const actualData = [180, 190, 170, 160, 175, 165, 170, 205, 230, 210, 240, 235];
  const forecastData = [40, 30, 50, 40, 55, 40, 70, 100, 110, 120, 150, 140];

  // Build actual series up to current month
  const trimmedActual = actualData.map((val, i) =>
    i <= currentMonthIndex ? val : null
  );

  // Forecast line starts at current month point and continues
  const lastActual = actualData[currentMonthIndex];
  const trimmedForecast = forecastData.map((val, i) => {
    if (i < currentMonthIndex) return null;
    if (i === currentMonthIndex) return lastActual; // start from actual
    return val;
  });

  const options: ApexOptions = {
    chart: {
      fontFamily: "Outfit, sans-serif",
      height: 310,
      type: "line",
      toolbar: { show: false },
    },
    colors: ["#2563EB", "#DC2626"],
    stroke: {
      curve: "smooth",
      width: [2, 2],
      dashArray: [0, 5], // dotted forecast
    },
    markers: { size: 0 },
    grid: {
      xaxis: { lines: { show: false } },
      yaxis: { lines: { show: true } },
    },
    dataLabels: { enabled: false },
    xaxis: {
      type: "category",
      categories: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ],
      axisBorder: { show: false },
      axisTicks: { show: false },
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
      enabled: true,
    },
    legend: {
      show: false,
    },
  };

  const series = [
    {
      name: "Actual",
      data: trimmedActual,
    },
    {
      name: "Forecast",
      data: trimmedForecast,
    },
  ];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-5 pb-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
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
