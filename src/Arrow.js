import { Line } from "@visx/shape";
import { MarkerArrow } from "@visx/marker";
import { cool3 } from "./App";

export default function Arrow({ from, to }) {
  return (
    <>
      <MarkerArrow id="tip" fill={cool3} refX={8} size={8} />
      <Line
        from={from}
        to={to}
        stroke={cool3}
        strokeWidth={1}
        markerEnd="url(#tip)"
      />
    </>
  );
}
