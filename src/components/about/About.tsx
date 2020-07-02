import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useTransition, animated } from "react-spring";
import { motion } from "framer-motion";

import Section from "../section/Section";
import { Box, TopLeftBox, BottomRightBox } from "../common/Box";
import AngelBeats from "../ui/AngelBeats";
import FadeIn from "../common/FadeIn";
import ColorText from "../common/ColorText";
import Portrait from "../../portrait_cropped.png";

import ReactLogo from "../../logo.svg";
import JenkinsLogo from "../../jenkins.svg";

const MySection = styled(Section)`
  background: black;
  display: flex;
  // overflow: hidden;
`;

const PortraitBorder = styled(motion.img)`
  border-color: white;
  border-radius: 150px;
  max-width: 80vw;
  margin: 5vw 5vw 5vh 5vh;
`;

const data = [
  { name: "React", logo: ReactLogo },
  { name: "Typescript", logo: ReactLogo },
  { name: "Jenkins", logo: JenkinsLogo },
  { name: "Teamcity", logo: ReactLogo },
  { name: "Tensorflow", logo: ReactLogo },
  { name: "AWS", logo: ReactLogo },
  { name: "GCP", logo: ReactLogo },
  { name: "R", logo: ReactLogo },
];

const About = () => {
  return (
    <MySection id="ABOUT-anchor">
      <Grid container>
        <Grid item md={6} sm={12}>
          <PortraitBorder
            src={Portrait}
            initial={{ filter: "grayscale(20%)" }}
            width="95%"
            whileHover={{
              scale: 1.05,
              filter: "grayscale(0%)",
              borderRadius: "50px",
            }}
            whileTap={{ borderRadius: "300px", scale: 0.9 }}
          />
        </Grid>
        <Grid item md={6} sm={12}>
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
            <Typography
              variant="h1"
              display="inline"
              align="left"
              paragraph={true}
            >
              {`About me`}
            </Typography>
            <Typography variant="h5" align="left" paragraph={true}>
              {`I'm an 4th year undergraduate studying Bachelor Advanced Maths (Honours) / Bachelor Computer Science.`}
            </Typography>
            <Typography variant="h5" align="left" paragraph={true}>
              {`My main interests lie in `}
              <ColorText>Machine Learning</ColorText>,{" "}
              <ColorText>Security</ColorText> and{" "}
              <ColorText>Statistics</ColorText>.
            </Typography>
            <Typography variant="h5" align="left" paragraph={true}>
              {`Here are some technologies I've been working with recently:`}
            </Typography>
            <Grid container>
              {data.map((value) => {
                return (
                  <>
                    <Grid xs={1}>
                      <Typography variant="h5">
                        <code>></code>
                      </Typography>
                      {/* <img src={value.logo} height="30em" /> */}
                    </Grid>
                    <Grid xs={5}>
                      <Typography variant="h5" align="left">
                        <code>{value.name}</code>
                      </Typography>
                    </Grid>{" "}
                  </>
                );
              })}
            </Grid>
          </FadeIn>
        </Grid>
      </Grid>
    </MySection>
  );
};

const styledAbout = styled(About)`
  display: flex;
  flex-direction: column;
`;

export default styledAbout;
