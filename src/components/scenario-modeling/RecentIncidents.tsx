"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Badge from "../ui/badge/Badge";

interface Incident {
  id: number;
  location: string;
  type: string;
  timestamp: string;
  severity: "Low" | "Moderate" | "High";
}

const incidentData: Incident[] = [
  {
    id: 1,
    location: "Sheikh Zayed Rd, Dubai",
    type: "Traffic Accident",
    timestamp: "2025-05-30 08:45",
    severity: "High",
  },
  {
    id: 2,
    location: "Al Reem Island, Abu Dhabi",
    type: "Power Outage",
    timestamp: "2025-05-30 07:15",
    severity: "Moderate",
  },
  {
    id: 3,
    location: "Industrial Area, Sharjah",
    type: "Fire Incident",
    timestamp: "2025-05-29 22:30",
    severity: "High",
  },
  {
    id: 4,
    location: "Ajman Corniche",
    type: "Water Supply Disruption",
    timestamp: "2025-05-29 17:20",
    severity: "Low",
  },
  {
    id: 5,
    location: "Al Ain Downtown",
    type: "Road Closure",
    timestamp: "2025-05-29 14:10",
    severity: "Moderate",
  },
];

export default function RecentIncidents() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Recent Incidents
        </h3>
      </div>
      <div className="max-w-full overflow-x-auto">
        <Table>
          <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
            <TableRow>
              <TableCell isHeader className="text-theme-xs text-gray-500 dark:text-gray-400">
                Location
              </TableCell>
              <TableCell isHeader className="text-theme-xs text-gray-500 dark:text-gray-400">
                Type
              </TableCell>
              <TableCell isHeader className="text-theme-xs text-gray-500 dark:text-gray-400">
                Time
              </TableCell>
              <TableCell isHeader className="text-theme-xs text-gray-500 dark:text-gray-400">
                Severity
              </TableCell>
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
            {incidentData.map((incident) => (
              <TableRow key={incident.id}>
                <TableCell className="text-theme-sm text-gray-800 dark:text-white/90">
                  {incident.location}
                </TableCell>
                <TableCell className="text-theme-sm text-gray-500 dark:text-gray-400">
                  {incident.type}
                </TableCell>
                <TableCell className="text-theme-sm text-gray-500 dark:text-gray-400">
                  {incident.timestamp}
                </TableCell>
                <TableCell className="text-theme-sm">
                  <Badge
                    size="sm"
                    color={
                      incident.severity === "High"
                        ? "error"
                        : incident.severity === "Moderate"
                        ? "warning"
                        : "success"
                    }
                  >
                    {incident.severity}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
