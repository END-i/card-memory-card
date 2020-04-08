import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { Loading, Wrapper, Card } from "./styled";
import { ICard, ICardList } from "./types";

export default function ({ openCard, opened, show, page }: ICardList) {
  const [cardsList, setCardsList] = useState<ICard[]>();
  const { loading, error, data } = useQuery(gql`
    {
      characters(page: ${page}) {
        results {
          id
          image
        }
      }
    }
  `);

  useEffect(() => {
    if (data) {
      const randomsort = [...data.characters.results, ...data.characters.results]
        .map((a: ICard) => ({ sort: Math.random(), value: a }))
        .sort((a: { sort: number }, b: { sort: number }) => a.sort - b.sort)
        .map((a: { value: ICard }) => a.value);
      setCardsList(randomsort);
    }
  }, [data]);

  if (error) {
    return <div>ERROR!!!!</div>;
  }
  if (loading || !cardsList) {
    return <Loading>Loading...</Loading>;
  }

  return (
    <Wrapper>
      {cardsList.map(({ image, id }: ICard, key: number) => {
        return (
          <Card key={key} onClick={() => openCard(id, key)} show={opened[id] || Boolean(show[key])}>
            <img src={image} alt="" />
          </Card>
        );
      })}
    </Wrapper>
  );
}
