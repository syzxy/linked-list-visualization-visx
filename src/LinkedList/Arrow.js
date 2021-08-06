import React, { useContext } from "react";
import { Line } from "@visx/shape";
import { Group } from "@visx/group";
import { MarkerArrow } from "@visx/marker";
import { cool3, RefsContext } from "../App";

export default function Arrow({ offset, from, to }) {
  const refs = useContext(RefsContext);

  return (
    <Group
      innerRef={(el) => (refs[offset] = { ...refs[offset], pointerRef: el })}
      opacity={0}
      color={cool3}
    >
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
