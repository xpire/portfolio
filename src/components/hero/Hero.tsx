import React, { useState, useCallback } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useTransition, animated } from "react-spring";
import { motion } from "framer-motion";

import Section from "../section/Section";
import AvatarLogo from "../../avatar.svg";
import GithubLogo from "../../github2.png";
import LinkedinLogo from "../../linkedin.svg";
import GmailLogo from "../../email.svg";

const Box = styled.div`
  display: flex;
  position: absolute;
`;

const TopLeftBox = styled(Box)`
  flex-direction: column;
  align-items: flex-start;
  padding-left: 5vw;
  padding-top: 10vh;
  z-index: 5;
`;

const BottomRightBox = styled(Box)`
  align-items: flex-start;
  bottom: 100%;
  right: 45%;
  z-index: 0;
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
`;

const ParallaxImg = styled(motion.img)`
  width: auto;
  height: 100vh;
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
    value: "justinor",
    left: "linkedin.com/in/",
    right: "/",
    href: "https://au.linkedin.com/in/justinor",
    key: 1,
    src: LinkedinLogo,
  },
  {
    name: "Github is",
    value: "xpire",
    left: "github.com/",
    right: "/",
    href: "https://github.com/xpire",
    key: 2,
    src: GithubLogo,
  },
  {
    name: "email is",
    value: "justin.or.mail",
    left: "",
    right: "@gmail.com",
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

  // const clickLink = () => {
  //   const href = data[current].href;
  //   if (href) {
  //     var win = window.open(href, "_blank");
  //     win!.focus();
  //   }
  // };

  const transitions = useTransition(current, (item: number) => item, {
    from: { opacity: 0, transform: "translate3d(0, -40px, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0px, 0)" },
    leave: { opacity: 0, transform: "translate3d(0, 40px, 0)" },
  });

  const backgroundTransitions = useTransition(current, (item: number) => item, {
    from: { opacity: 0, transform: "translate3d(40px, 0, 0)" },
    enter: { opacity: 0.4, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(-40px, 0, 0)" },
  });

  return (
    <Section onClick={onClick}>
      <TopLeftBox>
        <Line container spacing={3}>
          <Grid item>
            <Typography variant="h1">{`Hi my `}</Typography>
          </Grid>
          <Grid item>
            {transitions.map(({ item, props, key }: transitionProps) => {
              return (
                <AnimatedSentence key={key + "n1"}>
                  <animated.div key={key + "n2"} style={{ ...props }}>
                    <Typography key={key + "n3"} variant="h1">
                      {data[item].name}
                    </Typography>
                  </animated.div>
                </AnimatedSentence>
              );
            })}
          </Grid>
        </Line>
        <Line container spacing={3}>
          <Grid item>
            <Typography variant="h1">{`>`}</Typography>
          </Grid>
          <Grid item>
            {transitions.map(({ item, props, key }: transitionProps) => {
              return (
                <AnimatedSentence key={key + "v1"}>
                  <MinimalLink
                    href={data[item].href}
                    target={item == 0 ? "" : "_blank"}
                    rel={item == 0 ? "" : "noopener noreferrer"}
                    style={{}}
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
                      <Typography
                        key={key + "v3"}
                        variant="h1"
                        color="textSecondary"
                      >
                        {data[item].left}
                      </Typography>
                      <Typography
                        key={key + "v4"}
                        variant="h1"
                        color="secondary"
                      >
                        {data[item].value}
                      </Typography>
                      <Typography
                        key={key + "v5"}
                        variant="h1"
                        color="textSecondary"
                      >
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
                  // style={{ ...data[item].style }}
                  alt="background overlay"
                />
              </animated.div>
            </AnimatedSentence>
          );
        })}
      </BottomRightBox>
    </Section>
  );
};

const styledHero = styled(Hero)`
  display: flex;
  flex-direction: column;
`;

export default styledHero;
