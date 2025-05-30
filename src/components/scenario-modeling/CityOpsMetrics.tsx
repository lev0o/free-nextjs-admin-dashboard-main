"use client";
import React from "react";
import Badge from "../ui/badge/Badge";
import {
  AlertTriangleIcon,
  ActivityIcon,
  ShieldCheckIcon,
  ZapIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from "lucide-react"; // or your custom icon set

export const CityOpsMetrics = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
      {/* Active Incidents */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <AlertTriangleIcon className="text-gray-800 size-6 dark:text-white/90" />
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-md text-gray-500 dark:text-gray-400">
              Active Incidents
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              7
            </h4>
          </div>
          <Badge color="error">
            <ArrowUpIcon />
            12.5%
          </Badge>
        </div>
      </div>

      {/* Traffic Congestion Index */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <ActivityIcon className="text-gray-800 size-6 dark:text-white/90" />
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-md text-gray-500 dark:text-gray-400">
              Traffic Congestion
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              63%
            </h4>
          </div>
          <Badge color="warning">
            <ArrowUpIcon />
            5.2%
          </Badge>
        </div>
      </div>

      {/* Emergency Resource Availability */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <ShieldCheckIcon className="text-gray-800 size-6 dark:text-white/90" />
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-md text-gray-500 dark:text-gray-400">
              Resource Availability
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              81%
            </h4>
          </div>
          <Badge color="success">
            <ArrowUpIcon />
            3.1%
          </Badge>
        </div>
      </div>

      {/* Event Disruption Risk */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <ZapIcon className="text-gray-800 size-6 dark:text-white/90" />
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-md text-gray-500 dark:text-gray-400">
              Disruption Risk
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              72%
            </h4>
          </div>
          <Badge color="error">
            <ArrowDownIcon />
            4.4%
          </Badge>
        </div>
      </div>
    </div>
  );
};
