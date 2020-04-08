export type ICard = {
  image: string;
  id: number;
};

export type IShow = {
  [key: number]: number;
};

export type IOpened = {
  [key: number]: boolean;
};

export type ITimer = {
  h: string;
  m: string;
  s: string;
  start: number;
};

export type ITimerProps = {
  counter: number;
  timer: ITimer;
  restart: () => void;
};

export type ICardList = {
  openCard: (id: number, key: number) => void;
  opened: IOpened;
  show: IShow;
  page: number;
};
