import React, { useState } from "react";
import "./App.css";
import Timer from "./components/timer";
import TimerBtns from "./components/timerBtns";

//type
import { timerState } from "./types/timer_TYPE";

function App() {
  const [timer, setTimer] = useState<timerState>({ h: 0, m: 0, s: 0, ms: 0 });
  const [interv, setInterv] = useState<any>();
  const [status, setStatus] = useState<number>(0);

  const start = () => {
    run();
    setInterv(setInterval(run, 10));
    setStatus(1);
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };
  const resume = () => start();
  const reset = () => {
    clearInterval(interv);
    setTimer({ h: 0, m: 0, s: 0, ms: 0 });
    setStatus(0);
  };

  let updateH: number = timer.h;
  let updateM: number = timer.m;
  let updateS: number = timer.s;
  let updateMS: number = timer.ms;

  const run = () => {
    if (updateM === 60) {
      updateH++;
      updateM = 0;
    }
    if (updateS === 60) {
      updateM++;
      updateS = 0;
    }
    if (updateMS === 100) {
      updateS++;
      updateMS = 0;
    }
    updateMS++;
    return setTimer({ h: updateH, m: updateM, s: updateS, ms: updateMS });
  };

  return (
    <div className="App">
      <Timer timer={timer} />

      <TimerBtns
        startfn={start}
        stopfn={stop}
        resumefn={resume}
        resetfn={reset}
        status={status}
      />
    </div>
  );
}

export default App;
