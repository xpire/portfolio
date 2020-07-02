import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useTransition, animated } from "react-spring";
import { motion } from "framer-motion";
import Link from "@material-ui/core/Link";

import Section from "../section/Section";
import { Box, TopLeftBox, BottomRightBox } from "../common/Box";
import ColorText from "../common/ColorText";
import AvatarLogo from "../../radar.svg";
import GithubLogo from "../../github2.png";
import LinkedinLogo from "../../linkedin.svg";
import GmailLogo from "../../email.svg";

const MySection = styled(Section)`
  background: black;
  z-index: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Body = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 5vh;
  padding-right: 5vw;
  padding-left: 5vw;
  padding-bottom: 5vh;
`;

const AnimatedSentence = styled(Box)`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  white-space: nowrap;
  word-wrap: break-word;
  flex-wrap: wrap;
`;

const MinimalLink = styled(motion.a)`
  text-decoration: none;
  position: relative;
  color: white;
`;

const ParallaxImg = styled(motion.img)`
  width: 100vw;
  // max-width: 700px;
  // bottom: 0;
  height: auto;
  position: absolute;
  z-index: 2;
`;

const data = [
  // {
  //   name: "name is",
  //   value: "Justin\u00A0Or",
  //   left: "",
  //   right: "",
  //   href: "#",
  //   key: 0,
  //   src: AvatarLogo,
  // },
  {
    name: "Linkedin",
    value: "‌justinor",
    left: "linkedin.com\u200B/in/",
    right: "/",
    href: "https://au.linkedin.com/in/justinor",
    key: 1,
    src: LinkedinLogo,
  },
  {
    name: "Github",
    value: "‌xpire",
    left: "github.com/",
    right: "/",
    href: "https://github.com/xpire",
    key: 2,
    src: GithubLogo,
  },
  {
    name: "Email",
    value: "justin.or.mail‌‌",
    left: "",
    right: "‌\u200B@gmail.com",
    href: "mailto:justin.or.mail@gmail.com",
    key: 3,
    src: GmailLogo,
  },
];

type transitionProps = {
  item: number;
  props: any;
  key: string;
};

const Contact = () => {
  const [current, setCurrent] = useState(0);

  // const onClick = useCallback(
  //   (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  //     setCurrent(event.target.key);
  //   },
  //   []
  // );

  // const backgroundTransitions = useTransition(current, (item: number) => item, {
  //   from: { opacity: 0, transform: "translate3d(40px, 0, 0)" },
  //   enter: { opacity: 0.2, transform: "translate3d(0, 0, 0)" },
  //   leave: { opacity: 0, transform: "translate3d(-40px, 0, 0)" },
  // });

  return (
    <MySection id="CONTACT-anchor">
      <Body>
        <Typography variant="h1">Contact me</Typography>
      </Body>
      <Body>
        <Grid container alignItems="flex-start" flex-direction="column">
          {data.map((e) => {
            return (
              <Grid item xs={12}>
                <Grid>
                  <motion.img
                    src={e.src}
                    height={"32px"}
                    style={{ filter: "invert(100%)" }}
                  />
                </Grid>
                <Grid>
                  <Link
                    underline="hover"
                    color="inherit"
                    key={e.key}
                    href={e.href}
                    target="_blank"
                    rel="noopener"
                    // onMouseOver={onClick}
                  >
                    {e.left}
                    <ColorText>{e.value}</ColorText>
                    {e.right}
                  </Link>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Body>
      <Body>
        <Grid>
          <Link
            underline="hover"
            color="inherit"
            href={"mailto:justin.or.mail@gmail.com"}
            // href={
            //   "https://drive.google.com/file/d/1lie92_MGf3khXTju0k7kuysYNWZcAvKA/view?usp=sharing"
            // }
            // target="_blank"
            // rel="noopener"
          >
            <ColorText>Email me for a Resume</ColorText>
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Link
            underline="hover"
            color="inherit"
            href={"https://github.com/xpire/portfolio"}
            target="_blank"
            rel="noopener"
          >
            <ColorText>Check out this page's source code</ColorText>
          </Link>
        </Grid>
      </Body>
    </MySection>
  );
};

export default Contact;
