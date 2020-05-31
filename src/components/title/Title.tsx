import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useTransition, animated } from "react-spring";
import { motion } from "framer-motion";

import Section from "../section/Section";
import { Box, TopLeftBox, BottomRightBox } from "../common/Box";
import AngelBeats from "../ui/AngelBeats";
import ColorText from "../common/ColorText";
import FadeIn from "../common/FadeIn";

var Latex = require("react-latex");

const MySection = styled(Section)`
  background: black;
  display: flex;
`;

const Title = () => {
  return (
    <MySection id="home-anchor">
      <FadeIn
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          paddingLeft: "5vw",
          paddingRight: "5vw",
          paddingTop: "10vh",
          zIndex: 2,
        }}
      >
        <Typography variant="h1" display="inline">
          {`Hi, my name is `}
          <ColorText variant="h1">{`Justin\u00A0Or`}</ColorText>
          {"."}
        </Typography>
        <Typography variant="h2" align="left">
          {`I'm a software engineer with a passion for `}
          <code>algorithms</code>
          {`, `}
          <Latex>$maths$</Latex>
          {` and everything in between.`}
        </Typography>
      </FadeIn>
      <AngelBeats />
    </MySection>
  );
};

export default Title;
