import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

import GlobalStyles from "./globalStyles";
import Game from "../screens/game";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
});

export default function () {
  return (
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Game />
    </ApolloProvider>
  );
}
