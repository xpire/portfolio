import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useTransition, animated } from "react-spring";
import { motion } from "framer-motion";

import Section from "../section/Section";
import { Box, TopLeftBox, BottomRightBox } from "../common/Box";
import AngelBeats from "../ui/AngelBeats";

const MySection = styled(Section)`
  background: black;
  display: flex;
  overflow: hidden;
`;

const Indented = styled(Typography)`
  text-align: left;
`;

const RelativeBox = styled(Box)`
  position: relative;
  overflow: "hidden";
`;

const About = () => {
  return (
    <MySection>
      <TopLeftBox>
        <Typography variant="h1">About me</Typography>
        <Indented variant="h4">
          Hi, I'm a 4th year penultimate student studying a double degree in
          Advanced Mathematics (Honours) and Computer Science at UNSW. My main
          interests are Statistics, Machine Learning, Security and Frontend.
        </Indented>
      </TopLeftBox>
      <RelativeBox>
        <AngelBeats />
      </RelativeBox>
    </MySection>
  );
};

const styledAbout = styled(About)`
  display: flex;
  flex-direction: column;
`;

export default styledAbout;
