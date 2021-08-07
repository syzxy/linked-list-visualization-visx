import React from "react";
import { Line } from "@visx/shape";
import { Group } from "@visx/group";
import { cool3 } from "../App";
const op = 0.4;

export default function ListNode({
  height,
  width,
  value,
  offset,
  node,
  ...rest
}) {
  const x = 2 * offset * width;

  return (
    <Group innerRef={(el) => (node.nodeRef = el)} color={cool3} opacity={1}>
      <rect
        width={width}
        height={height}
        x={x}
        rx={height / 8}
        strokeWidth={1}
        stroke="currentcolor"
        fill="currentcolor"
        fillOpacity={op}
        {...rest}
      />
      <Line
        stroke="currentcolor"
        strokeWidth={1}
        from={{ x: x + (width * 2) / 3, y: 0 }}
        to={{ x: x + (width * 2) / 3, y: height }}
      />
      <circle
        stroke="currentcolor"
        fill="currentcolor"
        r={2}
        cx={x + (width * 5) / 6}
        cy={height / 2}
      />
      <text
        fill="currentcolor"
        strokeWidth={1}
        x={x + width / 3}
        y={height / 2}
        textAnchor="middle"
        fontSize={18}
        dy=".33em"
      >
        {value}
      </text>
    </Group>
  );
}
