import { Fragment } from "react";
import { Group } from "@visx/group";
import { LinearGradient } from "@visx/gradient";
import ListNode from "./ListNode";
import Arrow from "./Arrow";
const bg1 = "#3b6978";
const bg2 = "#204051";

export default function Canvas({ list, width, height }) {
  return (
    <svg width={width} height={height}>
      <LinearGradient id="bg" from={bg2} to={bg1} />
      <rect x={0} y={0} width={width} height={height} fill="url(#bg)" rx={8} />
      <Group top={40} left={40}>
        {list.map((e, i) => (
          <Fragment key={i}>
            <ListNode
              nodeRef={e.ref}
              width={60}
              height={40}
              value={e.value}
              offset={i}
            />
            {i < list.length - 1 && (
              <Arrow
                from={{ x: 60 * (5 / 6 + 2 * i), y: 40 / 2 }}
                to={{ x: 60 * 2 * (i + 1), y: 40 / 2 }}
              />
            )}
          </Fragment>
        ))}
      </Group>
    </svg>
  );
}
