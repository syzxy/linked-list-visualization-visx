import React, { useContext } from "react";
import { Line } from "@visx/shape";
import { Group } from "@visx/group";
import { cool3, op, RefsContext } from "./App";

export default function ListNode({ height, width, value, offset, ...rest }) {
  const x = 2 * offset * width;
  const refs = useContext(RefsContext);

  return (
    <Group
      innerRef={(el) => (refs[offset] = { ...refs[offset], nodeRef: el })}
      color={cool3}
      opacity={0}
    >
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
