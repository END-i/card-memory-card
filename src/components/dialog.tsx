import React from "react";

import { Dialog, Title } from "./styled";

export default function ({ open }: { open: boolean }) {
  return (
    <Dialog open={open}>
      <Title center size={30}>
        Congratilation
      </Title>
      <Title center>To start the game, click the Restart button.</Title>
    </Dialog>
  );
}
