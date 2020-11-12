import React from "react";
//type
import { timerBtnsPropsType } from "../types/timer_TYPE";

const TimerBtns: React.FC<timerBtnsPropsType> = ({
  startfn,
  stopfn,
  resumefn,
  resetfn,
  status,
}) => {
  return (
    <div className="container">
      <div className="">
        {status === 0 ? (
          <button id="start" className="btn" onClick={startfn}>
            Start
          </button>
        ) : (
          <div>
            <button
              id="stopResume"
              className="btn"
              onClick={status === 2 ? resumefn : stopfn}
            >
              {status === 2 ? "Resume" : "Stop"}
            </button>
            <button id="reset" className="btn  btn-danger" onClick={resetfn}>
              Reset
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimerBtns;
