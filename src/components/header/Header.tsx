import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useTransition, animated } from "react-spring";
import { motion } from "framer-motion";
import AppBar from "@material-ui/core/AppBar";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import FolderIcon from "@material-ui/icons/Folder";
import CallIcon from "@material-ui/icons/Call";
import InfoIcon from "@material-ui/icons/Info";
import HomeIcon from "@material-ui/icons/Home";

import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";

function HideOnScroll(props: { children: React.ReactElement }) {
  const { children } = props;
  const trigger = useScrollTrigger({ target: window });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Title = () => {
  const [value, setValue] = React.useState("home");

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
    const anchor = document.querySelector(`#${newValue}-anchor`);
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  // const listenScrollEvent = (e:any) => {
  //   window.scrollY % window.innerHeight
  //   if (window.scrollY > window.innerHeight) {
  //     setValue("")
  // }

  // componentDidMount() {
  //   window.addEventListener('scroll', listenScrollEvent)
  // }

  return (
    <HideOnScroll>
      <AppBar>
        <BottomNavigation
          value={value}
          onChange={handleChange}
          style={{
            marginRight: 2,
            background: "black",
          }}
        >
          <BottomNavigationAction
            label="Home"
            value="home"
            icon={<HomeIcon />}
            style={{ color: "white" }}
          />
          <BottomNavigationAction
            label="About"
            value="about"
            style={{ color: "white" }}
            icon={<InfoIcon />}
          />
          <BottomNavigationAction
            label="Projects"
            value="projects"
            style={{ color: "white" }}
            icon={<FolderIcon />}
          />
          <BottomNavigationAction
            label="Contact"
            value="contact"
            style={{ color: "white" }}
            icon={<CallIcon />}
          />
        </BottomNavigation>
      </AppBar>
    </HideOnScroll>
  );
};

export default Title;
