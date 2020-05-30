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
  z-index: 5;
`;

const Line = styled(Grid)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  position: relative;
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
  width: 110vw;
  max-width: 800px;
  height: auto;
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

const Hero = () => {
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
    enter: { opacity: 0.5, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(-40px, 0, 0)" },
  });

  return (
    <MySection onClick={onClick}>
      <TopLeftBox
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Line container spacing={1}>
          <Grid item>
            <Typography variant="h2">{`Hi my `}</Typography>
          </Grid>
          <Grid item>
            {transitions.map(({ item, props, key }: transitionProps) => {
              return (
                <AnimatedSentence key={key + "n1"}>
                  <animated.div key={key + "n2"} style={{ ...props }}>
                    <Typography key={key + "n3"} variant="h2">
                      {data[item].name}
                    </Typography>
                  </animated.div>
                </AnimatedSentence>
              );
            })}
          </Grid>
        </Line>
        <Line container spacing={2}>
          <Grid item>
            <Typography variant="h2">{`>`}</Typography>
          </Grid>
          <Grid item>
            {transitions.map(({ item, props, key }: transitionProps) => {
              return (
                <AnimatedSentence key={key + "v1"}>
                  <MinimalLink
                    href={data[item].href}
                    target={item === 0 ? "" : "_blank"}
                    rel={item === 0 ? "" : "noopener noreferrer"}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <animated.div
                      key={key + "v2"}
                      style={{
                        ...props,
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <Typography key={key + "v3"} variant="h2">
                        {data[item].left}
                      </Typography>
                      <ColorText key={key + "v4"} variant="h2">
                        {data[item].value}
                      </ColorText>
                      <Typography key={key + "v5"} variant="h2">
                        {data[item].right}
                      </Typography>
                    </animated.div>
                  </MinimalLink>
                </AnimatedSentence>
              );
            })}
          </Grid>
        </Line>
        <Typography variant="h3">
          Advanced Maths / Computer Science / UNSW
        </Typography>
      </TopLeftBox>
      <BottomRightBox>
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
      </BottomRightBox>
    </MySection>
  );
};

const styledHero = styled(Hero)`
  display: flex;
  flex-direction: column;
`;

export default styledHero;
