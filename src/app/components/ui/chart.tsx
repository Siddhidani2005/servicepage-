"use client"

import * as React from "react"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  Pie,
  PieChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { cn } from "./utils"


// Type for Chart Config
export type ChartConfig = {
  [key: string]: {
    label?: string
    color?: string
  }
}

// Chart Container Props
export function ChartContainer({
  children,
  config,
  className,
}: {
  children: React.ReactNode
  config: ChartConfig
  className?: string
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-xl border bg-background p-4",
        className
      )}
    >
      {children}
    </div>
  )
}

// ✅ Chart Tooltip Content
export function ChartTooltipContent({
  active,
  payload,
  label,
}: {
  active?: boolean
  payload?: Array<any>
  label?: string | number
}) {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-white p-2 shadow">
        <p className="text-sm font-medium">{label}</p>
        {payload.map((entry, index) => (
          <div key={`item-${index}`} className="flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-xs">{`${entry.name}: ${entry.value}`}</span>
          </div>
        ))}
      </div>
    )
  }
  return null
}

// ✅ Chart Legend Content
function ChartLegendContent({
  className,
  hideIcon = false,
  payload,
  verticalAlign = "bottom",
  nameKey,
}: React.ComponentProps<"div"> & {
  payload?: Array<any>
  verticalAlign?: "top" | "bottom" | "middle"
  hideIcon?: boolean
  nameKey?: string
}) {
  if (!payload?.length) return null

  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-4 text-sm",
        verticalAlign === "bottom" && "mt-2 justify-center",
        verticalAlign === "top" && "mb-2 justify-center",
        className
      )}
    >
      {payload.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {!hideIcon && (
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: item.color }}
            />
          )}
          <span>{nameKey ? item.payload?.[nameKey] : item.value}</span>
        </div>
      ))}
    </div>
  )
}

export { ChartLegendContent }

