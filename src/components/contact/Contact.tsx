import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useTransition, animated } from "react-spring";
import { motion } from "framer-motion";

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
  padding-top: 10vh;
  padding-right: 5vw;
  padding-left: 5vw;
  padding-bottom: 20vh;
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
  {
    name: "name is",
    value: "Justin Or",
    left: "",
    right: "",
    href: "#",
    key: 0,
    src: AvatarLogo,
  },
  {
    name: "Linkedin is",
    value: "‌justinor",
    left: "linkedin.com/in/",
    right: "/",
    href: "https://au.linkedin.com/in/justinor",
    key: 1,
    src: LinkedinLogo,
  },
  {
    name: "Github is",
    value: "‌xpire",
    left: "github.com/",
    right: "/",
    href: "https://github.com/xpire",
    key: 2,
    src: GithubLogo,
  },
  {
    name: "email is",
    value: "justin.or.mail‌‌",
    left: "",
    right: "‌@gmail‌.com",
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
  const [hover, setHover] = useState(false);

  const onClick = useCallback(() => {
    setCurrent((current: number) => (current + 1) % data.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!hover) onClick();
    }, 4000);
    return () => clearInterval(interval);
  });

  const transitions = useTransition(current, (item: number) => item, {
    from: { opacity: 0, transform: "translate3d(0, -40px, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0px, 0)" },
    leave: { opacity: 0, transform: "translate3d(0, 40px, 0)" },
  });

  const backgroundTransitions = useTransition(current, (item: number) => item, {
    from: { opacity: 0, transform: "translate3d(40px, 0, 0)" },
    enter: { opacity: 0.2, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(-40px, 0, 0)" },
  });

  return (
    <MySection onClick={onClick} id="contact-anchor">
      <Body>
        <Typography variant="h1">Contact</Typography>
      </Body>
      <Body>
        {transitions.map(({ item, props, key }: transitionProps) => {
          return (
            <animated.div
              key={key + "n2"}
              style={{
                ...props,
                position: "absolute", // to ensure animation happens at correct place
                overflowWrap: "break-word",
              }}
            >
              <Typography key={key + "n3"} variant="h1" align="left">
                {"My " + data[item].name + " "}
              </Typography>
              <MinimalLink>
                <Typography key={key + "v1"} variant="h1">
                  {data[item].left}
                  <ColorText key={key + "v4"} variant="h1" display="inline">
                    {data[item].value}
                  </ColorText>
                  {data[item].right}
                </Typography>
              </MinimalLink>
            </animated.div>
          );
        })}
      </Body>
      {/* {/* <BottomRightBox> */}
      {backgroundTransitions.map(({ item, props, key }: transitionProps) => {
        return (
          <AnimatedSentence key={key + "b1"}>
            <animated.div key={key + "b1"} style={{ ...props }}>
              <ParallaxImg
                key={key + "b1"}
                src={data[item].src}
                alt="background overlay"
                style={{ filter: "invert(100%)" }}
              />
            </animated.div>
          </AnimatedSentence>
        );
      })}
      {/* </BottomRightBox> */}
    </MySection>
  );
};

export default Contact;
