import React, { useRef, useState } from "react";
import "./TicTacToe.css";
import CircleIcon from "../Assets/circle.png";
import CrossIcon from "../Assets/cross.png";

let data = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let titleRef = useRef(null);

  let boxRef1 = useRef(null);
  let boxRef2 = useRef(null);
  let boxRef3 = useRef(null);
  let boxRef4 = useRef(null);
  let boxRef5 = useRef(null);
  let boxRef6 = useRef(null);
  let boxRef7 = useRef(null);
  let boxRef8 = useRef(null);
  let boxRef9 = useRef(null);

  let boxArr = [
    boxRef1,
    boxRef2,
    boxRef3,
    boxRef4,
    boxRef5,
    boxRef6,
    boxRef7,
    boxRef8,
    boxRef9,
  ];

  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }
    if (count % 2 == 0) {
      e.target.innerHTML = `<img src='${CrossIcon}'>`;
      data[num] = "X";
      setCount(++count);
    } else {
      e.target.innerHTML = `<img src='${CircleIcon}'>`;
      data[num] = "O";
      setCount(++count);
    }
    checkWin();
  };

  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[6]);
    }
  };

  const won = (winner) => {
    setLock(true);
    if (winner === "X") {
      titleRef.current.innerHTML = `Congratulations : <img src=${CrossIcon}> Wins`;
    } else {
      titleRef.current.innerHTML = `Congratulations : <img src=${CircleIcon}> Wins`;
    }
  };

  const reset = () => {
    setLock(false);
    data = ["", "", "", "", "", "", "", "", ""];
    titleRef.current.innerHTML = `Tic-Tac-Toe Game in <span>React</span>`;
    boxArr.map((e) => {
      e.current.innerHTML = "";
    });
  };
  return (
    <div className="container">
      <h1 className="title" ref={titleRef}>
        Tic-Tac-Toe Game in <span>React</span>
      </h1>
      <div className="board">
        <div className="row1">
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 0);
            }}
            ref={boxRef1}
          ></div>
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 1);
            }}
            ref={boxRef2}
          ></div>
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 2);
            }}
            ref={boxRef3}
          ></div>
        </div>
        <div className="row2">
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 3);
            }}
            ref={boxRef4}
          ></div>
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 4);
            }}
            ref={boxRef5}
          ></div>
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 5);
            }}
            ref={boxRef6}
          ></div>
        </div>
        <div className="row3">
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 6);
            }}
            ref={boxRef7}
          ></div>
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 7);
            }}
            ref={boxRef8}
          ></div>
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 8);
            }}
            ref={boxRef9}
          ></div>
        </div>
      </div>
      <button
        className="reset-btn"
        onClick={() => {
          reset();
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default TicTacToe;
