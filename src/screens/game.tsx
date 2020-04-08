import React, { useState, useEffect } from "react";

import Dialog from "../components/dialog";
import Cards from "../components/cards";
import Timer from "../components/timer";
import { IShow, IOpened, ITimer } from "../components/types";

const getPage = () => Math.floor(Math.random() * 20);

export default function () {
  const [show, setShow] = useState<IShow>({});
  const [opened, setOpened] = useState<IOpened>({});
  const [counter, setCounter] = useState<number>(0);
  const [startGame, setStartGame] = useState(false);
  const [page, setPage] = useState(getPage());
  const [open, setOpen] = useState(false);
  const [timer, setTimer] = useState<ITimer>({
    h: "00",
    m: "00",
    s: "00",
    start: 0,
  });

  useEffect(() => {
    if (Object.keys(opened).length > 20) {
      setOpen(true);
    }
  }, [opened]);

  const zeroCheck = (num: number) => {
    if (num < 10) {
      return `0${num}`;
    } else {
      return `${num}`;
    }
  };

  const getNewDate = (start: number) => new Date(new Date().getTime() - start);

  useEffect(() => {
    let timer: number;
    if (startGame) {
      timer = setInterval(() => {
        setTimer((prev) => {
          let start = prev.start || new Date().getTime();
          const newDate = getNewDate(start);
          const s = zeroCheck(newDate.getSeconds());
          const m = zeroCheck(newDate.getMinutes());
          const h = zeroCheck(newDate.getHours() - 3);
          return { start, h, m, s };
        });
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [startGame]);

  useEffect(() => {
    const idx1 = Number(Object.keys(show)[0]);
    const idx2 = Number(Object.keys(show)[1]);

    if (show[idx1] === show[idx2] && idx1 !== idx2) {
      setOpened((prev: any) => ({ ...prev, [show[idx1]]: true }));
    }

    if (Object.keys(show).length > 1) {
      setCounter((prev) => (prev += 1));
    }
  }, [show]);

  const openCard = (id: number, key: number) => {
    if (!startGame) {
      setStartGame(true);
    }
    setShow((prev) => {
      if (Object.keys(prev).length > 1) {
        return { [key]: id };
      } else {
        return { ...prev, [key]: id };
      }
    });
  };

  const restart = () => {
    setCounter(0);
    setOpened({});
    setShow({});
    setTimer({ h: "00", m: "00", s: "00", start: 0 });
    setPage(getPage());
    setOpen(false);
  };

  return (
    <>
      <Cards openCard={openCard} page={page} show={show} opened={opened} />
      <Timer restart={restart} counter={counter} timer={timer} />
      <Dialog open={open} />
    </>
  );
}
