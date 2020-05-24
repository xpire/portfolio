import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useTransition, animated } from "react-spring";
import { motion } from "framer-motion";

import Section from "../section/Section";
import { Box, TopLeftBox, BottomRightBox } from "../common/Box";

const MySection = styled(Section)`
  background: black;
  display: flex;
`;

const Indented = styled(Typography)`
  text-align: left;
`;

const Projects = () => {
  return (
    <MySection>
      <TopLeftBox>
        <Typography variant="h1">Projects</Typography>
        <Indented variant="h4">
          Here are some projects I've been working on.
        </Indented>
      </TopLeftBox>
    </MySection>
  );
};

const styledProjects = styled(Projects)`
  display: flex;
  flex-direction: column;
`;

export default styledProjects;
