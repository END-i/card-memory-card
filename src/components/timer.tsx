import React from "react";

import { CounterWrapper } from "./styled";
import { ITimerProps } from "./types";

export default function ({ counter, timer, restart }: ITimerProps) {
  return (
    <CounterWrapper>
      <p>{`Click: ${counter}`}</p>
      <p>Time:{` ${timer.h} ${timer.m} ${timer.s}`}</p>
      <button onClick={restart}>Restart</button>
    </CounterWrapper>
  );
}
