//timer state type
export type timerState = {
  h: number;
  m: number;
  s: number;
  ms: number;
};

//timer props type
export type timerPropsType = {
  timer: timerState;
};

//button props type
export type timerBtnsPropsType = {
  startfn: () => void;
  stopfn: () => void;
  resumefn: () => void;
  resetfn: () => void;
  status: number;
};
