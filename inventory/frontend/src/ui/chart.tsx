"use client"

// import * as React from "react"
import { AxisBottom, AxisLeft } from "@visx/axis"
import { Grid } from "@visx/grid"
import { Group } from "@visx/group"
import { scaleBand, scaleLinear } from "@visx/scale"
import { Bar } from "@visx/shape"
import { useTooltip, useTooltipInPortal, defaultStyles } from "@visx/tooltip"

interface ChartData {
  label: string
  value: number
}

interface ChartProps {
  data: ChartData[]
  width: number
  height: number
  margin?: { top: number; right: number; bottom: number; left: number }
}

export function Chart({ data, width, height, margin = { top: 20, right: 20, bottom: 40, left: 40 } }: ChartProps) {
  const { showTooltip, hideTooltip, tooltipData, tooltipLeft, tooltipTop } = useTooltip()
  const { TooltipInPortal } = useTooltipInPortal({ scroll: true })

  // Bounds
  const xMax = width - margin.left - margin.right
  const yMax = height - margin.top - margin.bottom

  // Scales
  const xScale = scaleBand<string>({
    range: [0, xMax],
    round: true,
    domain: data.map((d) => d.label),
    padding: 0.4,
  })
  const yScale = scaleLinear<number>({
    range: [yMax, 0],
    round: true,
    domain: [0, Math.max(...data.map((d) => d.value))],
  })

  return (
    <div className="relative">
      <svg width={width} height={height}>
        <Group left={margin.left} top={margin.top}>
          <Grid
            xScale={xScale}
            yScale={yScale}
            width={xMax}
            height={yMax}
            stroke="var(--border)"
            strokeOpacity={0.1}
          />
          <AxisBottom
            top={yMax}
            scale={xScale}
            tickLabelProps={() => ({
              fill: "var(--foreground)",
              fontSize: 11,
              textAnchor: "middle",
            })}
          />
          <AxisLeft
            scale={yScale}
            tickLabelProps={() => ({
              fill: "var(--foreground)",
              fontSize: 11,
              textAnchor: "end",
              dy: "0.33em",
            })}
            numTicks={5}
          />
          {data.map((d) => {
            const barWidth = xScale.bandwidth()
            const barHeight = yMax - (yScale(d.value) ?? 0)
            const barX = xScale(d.label)
            const barY = yMax - barHeight
            return (
              <Bar
                key={`bar-${d.label}`}
                x={barX}
                y={barY}
                width={barWidth}
                height={barHeight}
                fill="var(--primary)"
                onMouseLeave={() => hideTooltip()}
                onMouseMove={() => {
                  const top = barY + margin.top
                  const left = (barX ?? 0) + barWidth / 2 + margin.left
                  showTooltip({
                    tooltipData: d,
                    tooltipTop: top,
                    tooltipLeft: left,
                  })
                }}
              />
            )
          })}
        </Group>
      </svg>
      {tooltipData ? (
        <TooltipInPortal
          key={Math.random()}
          top={tooltipTop}
          left={tooltipLeft}
          style={defaultStyles}
        >
          <strong>{(tooltipData as ChartData).label}</strong>
          <div>{(tooltipData as ChartData).value}</div>
        </TooltipInPortal>
      ) : null}
    </div>
  )
}