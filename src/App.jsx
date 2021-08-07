import { useState, useRef, useEffect, createContext } from "react";
import "./styles.css";
import Canvas from "./LinkedList/Canvas";
import anime from "animejs";
import SLList from "./LinkedList/SLList";

export const RefsContext = createContext(null);
// export const PointerRefsContext = createContext(null);

const width = 700;
const height = 500;
export const cool1 = "#122549";
export const cool3 = "#edffea";
export const hot = "#eb4d70";

export default function App() {
  // const [list, setList] = useState([
  //   { id: 1, value: 1 },
  //   { id: 2, value: 2 },
  //   { id: 3, value: 3 },
  //   { id: 4, value: 4 }
  // ]);
  const list = new SLList([1, 2, 3, 4]);
  // console.log(list);

  // const refs = useRef([]);
  // const animatedRefs = useRef([]);
  // const pointerRefs = useRef([]);
  // useEffect(() => {
  //   refs.current = refs.current.slice(0, list.length);
  //   // pointerRefs.current = pointerRefs.current.slice(0, list.length);
  //   animatedRefs.current = refs.current.reduce(
  //     (prev, { nodeRef, pointerRef }) => [...prev, nodeRef, pointerRef],
  //     []
  //   );
  //   animatedRefs.current.pop();
  //   const tl = anime.timeline({ duration: 1000 }).add({
  //     targets: animatedRefs.current,
  //     opacity: 1
  //   });
  //   tl.play();
  // }, [list]);

  // const highlight = (from = 0, to = animatedRefs.current.length) => {
  //   return anime
  //     .timeline({ easing: "easeInOutSine", delay: anime.stagger(300) })
  //     .add({
  //       targets: animatedRefs.current.slice(from, to),
  //       color: [
  //         { value: hot, duration: 300 },
  //         { value: cool3, duration: 300 }
  //       ]
  //     });
  // };

  const addLast = () => {
    //   highlight().finished.then(() =>
    //     setList((prev) => [...prev, { id: 5, value: 5 }])
    //   );
  };

  const removeLast = () => {
    //   highlight().finished.then(() =>
    //     setList((prev) => prev.slice(0, prev.length - 1))
    //   );
  };

  return (
    <div className="App">
      <Canvas list={list} width={width} height={height} />
      <button
        style={{
          margin: "1rem",
          width: "200px",
          padding: "10px",
          fontSize: "20px"
        }}
        onClick={addLast}
      >
        Add Last
      </button>
      <button
        style={{
          margin: "1rem",
          width: "200px",
          padding: "10px",
          fontSize: "20px"
        }}
        onClick={removeLast}
      >
        Remve Last
      </button>
    </div>
  );
}
