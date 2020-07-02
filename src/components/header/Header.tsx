import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useTransition, animated } from "react-spring";
import { motion } from "framer-motion";
import AppBar from "@material-ui/core/AppBar";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Button from "@material-ui/core/Button";

import FolderIcon from "@material-ui/icons/Folder";
import CallIcon from "@material-ui/icons/Call";
import InfoIcon from "@material-ui/icons/Info";
import HomeIcon from "@material-ui/icons/Home";
import logo from "../../website.logo.svg";

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

  const handleChange = (event: React.MouseEvent<{}>) => {
    const target = event.target as HTMLButtonElement;
    setValue(target.innerText);
    console.log(target.innerText);
    const anchor = document.querySelector(`#${target.innerText}-anchor`);
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth" });
    }
  };

  // window.addEventListener("load", () => {
  //   const headings = document.querySelectorAll("h1 a[name]");

  //   document.addEventListener("scroll", (e) => {
  //     headings.forEach((ha) => {
  //       const rect = ha.getBoundingClientRect();
  //       if (rect.top > 0 && rect.top < 150) {
  //         const location = window.location.toString().split("#")[0];
  //         history.replaceState(null, "", location + "#" + ha.name);
  //       }
  //     });
  //   });
  // });

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
      <AppBar
        style={{
          // marginLeft: 2,
          background: "black",
        }}
      >
        {/* <img
          src={logo}
          style={{
            filter: "invert(100%)",
            height: "1em",
            padding: "6px",
          }}
        /> */}
        <Grid container spacing={1} justify="flex-start" alignItems="stretch">
          <Grid item xs={3} md={1}>
            <Button style={{ color: "white" }} onClick={handleChange}>
              Home
            </Button>
          </Grid>
          <Grid item xs={3} md={1}>
            <Button style={{ color: "white" }} onClick={handleChange}>
              About
            </Button>
          </Grid>
          <Grid item xs={3} md={1}>
            <Button style={{ color: "white" }} onClick={handleChange}>
              Projects
            </Button>
          </Grid>
          <Grid item xs={3} md={1}>
            <Button style={{ color: "white" }} onClick={handleChange}>
              Contact
            </Button>
          </Grid>
        </Grid>

        {/* <BottomNavigation
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
        </BottomNavigation> */}
      </AppBar>
    </HideOnScroll>
  );
};

export default Title;
