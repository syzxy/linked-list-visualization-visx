import { useState, useRef } from "react";
import "./styles.css";
import Canvas from "./Canvas";
import anime from "animejs";

const width = 700;
const height = 500;
export const cool1 = "#122549";
export const cool3 = "#edffea";
export const op = 0.4;

export default function App() {
  const [list, setList] = useState([
    { value: 1, ref: useRef(null) },
    { value: 2, ref: useRef(null) },
    { value: 3, ref: useRef(null) },
    { value: 4, ref: useRef(null) }
  ]);

  const [tl, setTl] = useState(
    anime.timeline({
      easing: "easeInOutSine",
      delay: anime.stagger(1000)
    })
  );

  const highlight = () => {
    setTl((c) =>
      c.add({
        targets: list.map((e) => e.ref.current.firstChild),
        strokeDashoffset: [0, anime.setDashoffset, 0],
        duration: 500
      })
    );
    tl.play();
  };

  return (
    <div className="App">
      <Canvas list={list} width={width} height={height} />
      <button
        style={{
          display: "block",
          margin: "1rem auto",
          width: "120px",
          padding: "10px",
          fontSize: "20px"
        }}
        onClick={highlight}
      >
        click
      </button>
    </div>
  );
}
