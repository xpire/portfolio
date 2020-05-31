import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useTransition, animated } from "react-spring";
import { motion } from "framer-motion";

import Section from "../section/Section";
import { Box, TopLeftBox, BottomRightBox } from "../common/Box";
import FadeIn from "../common/FadeIn";
import Title from "./card/Title";
import CardList from "./CardList";

const MySection = styled(Section)`
  background: black;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Indented = styled(Typography)`
  // text-align: left;
`;

const Projects = () => {
  return (
    <MySection id="projects-anchor">
      <FadeIn
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          paddingLeft: "5vw",
          paddingRight: "5vw",
          paddingTop: "10vh",
          zIndex: 2,
        }}
      >
        <Typography variant="h1">Projects</Typography>
        <Typography variant="h4">
          Here are some projects I've been working on.
        </Typography>
        <div style={{ position: "relative" }}>
          <CardList />
        </div>
      </FadeIn>
    </MySection>
  );
};

const styledProjects = styled(Projects)`
  display: flex;
  flex-direction: column;
`;

export default styledProjects;
