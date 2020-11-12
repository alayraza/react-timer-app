import React from "react";
//type
import { timerPropsType } from "../types/timer_TYPE";

const Timer: React.FC<timerPropsType> = ({ timer }) => {
  return (
    <div className="container">
      <h1>Timer</h1>
      <h2 id="timer">
        {timer.h >= 10 ? timer.h : "0" + timer.h} :{" "}
        {timer.m >= 10 ? timer.m : "0" + timer.m} :{" "}
        {timer.s >= 10 ? timer.s : "0" + timer.s} :{" "}
        {timer.ms >= 10 ? timer.ms : "0" + timer.ms}
      </h2>
    </div>
  );
};

export default Timer;
