"use client";

import { useState } from "react";
import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";
import type { LatLngExpression, TooltipOptions, CircleMarkerOptions } from "leaflet";
import "leaflet/dist/leaflet.css";

import { MoreDotIcon } from "@/icons";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";

export default function DemographicCard() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] sm:p-6">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Predicted Risk Heatmap
          </h3>
          <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
            Spatial forecast of potential disruptions across the UAE
          </p>
        </div>

        <div className="relative inline-block">
          <button onClick={toggleDropdown} className="dropdown-toggle">
            <MoreDotIcon className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300" />
          </button>
          <Dropdown isOpen={isOpen} onClose={closeDropdown} className="w-40 p-2">
            <DropdownItem
              onItemClick={closeDropdown}
              className="text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/5"
            >
              View Full Map
            </DropdownItem>
            <DropdownItem
              onItemClick={closeDropdown}
              className="text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/5"
            >
              Download Report
            </DropdownItem>
          </Dropdown>
        </div>
      </div>

      {/* Leaflet Map */}
      <div className="px-4 py-6 my-6 border rounded-2xl bg-gray-50 dark:border-gray-800 dark:bg-gray-900 sm:px-6">
        <div className="h-[260px] w-full overflow-hidden rounded-xl">
          <MapContainer
            center={[24.4667, 54.3667] as LatLngExpression} // Abu Dhabi
            zoom={7}
            scrollWheelZoom={true}
            className="h-full w-full z-0"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              // @ts-ignore
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            <CircleMarker
              center={[25.276987, 55.296249] as LatLngExpression} // Dubai
              // @ts-ignore
              radius={10}
              pathOptions={{ color: "red", fillColor: "red", fillOpacity: 0.6 } as CircleMarkerOptions}
            >
              <Tooltip opacity={1}>
                Dubai – High Risk
              </Tooltip>
            </CircleMarker>

            <CircleMarker
              center={[24.453884, 54.3773438] as LatLngExpression} // Abu Dhabi
              // @ts-ignore
              radius={8}
              pathOptions={{ color: "orange", fillColor: "orange", fillOpacity: 0.5 } as CircleMarkerOptions}
            >
              <Tooltip opacity={1}>
                Abu Dhabi – Moderate Risk
              </Tooltip>
            </CircleMarker>

            <CircleMarker
              center={[25.4052, 55.5136] as LatLngExpression} // Sharjah
              // @ts-ignore
              radius={6}
              pathOptions={{ color: "green", fillColor: "green", fillOpacity: 0.4 } as CircleMarkerOptions}
            >
              <Tooltip opacity={1}>
                Sharjah – Low Risk
              </Tooltip>
            </CircleMarker>
          </MapContainer>
        </div>
        <p className="text-xs text-gray-400 mt-2">*Zoom or hover to explore regional risk indicators</p>
      </div>

      {/* Risk Level Legend */}
      <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 px-1">
        <div className="flex items-center gap-2">
          <span className="inline-block w-4 h-4 rounded bg-green-500"></span> Low Risk
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-4 h-4 rounded bg-orange-400"></span> Moderate
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-4 h-4 rounded bg-red-500"></span> High Risk
        </div>
      </div>
    </div>
  );
}
