import * as React from "react";
import Card, { CardData } from "./card/Card";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import cardData from "../../content/projects";

const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const List = ({ match, history }: { match: any; history: any }) => (
  <StyledUl>
    {cardData.map((card) => (
      <Card
        key={card.id}
        isSelected={match.params.id === card.id}
        history={history}
        src={card.src}
        content={card.content}
        {...card}
      />
    ))}
  </StyledUl>
);

const CardList = () => (
  <Router>
    <Route path={["/:id", "/"]} component={List} />
  </Router>
);

const StyledCardList = styled(CardList)`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;

export default StyledCardList;
