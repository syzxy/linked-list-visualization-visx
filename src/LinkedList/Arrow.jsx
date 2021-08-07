import React from "react";
import { Line } from "@visx/shape";
import { Group } from "@visx/group";
import { MarkerArrow } from "@visx/marker";
import { cool3 } from "../App";

export default function Arrow({ node, offset, from, to }) {
  return (
    <Group innerRef={(el) => (node.arrowRef = el)} opacity={1} color={cool3}>
      <MarkerArrow
        id={`tip${offset}`}
        fill={"currentColor"}
        refX={8}
        size={8}
      />
      <Line
        from={from}
        to={to}
        stroke={"currentcolor"}
        strokeWidth={1}
        markerEnd={`url(#tip${offset})`}
      />
    </Group>
  );
}
