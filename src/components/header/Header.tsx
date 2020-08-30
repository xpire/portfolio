import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Link from "@material-ui/core/Link";

import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";

function HideOnScroll(props: { children: React.ReactElement }) {
  const { children } = props;
  const trigger = useScrollTrigger({ target: window });
  const userAgentString = navigator.userAgent;
  const chromeAgent = userAgentString.indexOf("Chrome") > -1; // to detect if chrome, backdrop-filter does not work on firefox :( 8/8/20

  return (
    <Slide appear={false} direction="down" in={!trigger || chromeAgent}>
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

  const userAgentString = navigator.userAgent;
  const chromeAgent = userAgentString.indexOf("Chrome") > -1;
  return (
    <HideOnScroll>
      <AppBar
        style={{
          background: chromeAgent ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0.9)",
          backdropFilter: chromeAgent ? "blur(10px)" : "none", // to detect if chrome, backdrop-filter does not work on firefox :( 8/8/20
        }}
      >
        <Grid container spacing={1} justify="flex-start" alignItems="stretch">
          <Grid item xs={3} md={1}>
            <Link style={{ color: "white" }} onClick={handleChange}>
              <Typography variant="overline">Home</Typography>
            </Link>
          </Grid>
          <Grid item xs={3} md={1}>
            <Link style={{ color: "white" }} onClick={handleChange}>
              <Typography variant="overline">About</Typography>
            </Link>
          </Grid>
          <Grid item xs={3} md={1}>
            <Link style={{ color: "white" }} onClick={handleChange}>
              <Typography variant="overline">Projects</Typography>
            </Link>
          </Grid>
          <Grid item xs={3} md={1}>
            <Link style={{ color: "white" }} onClick={handleChange}>
              <Typography variant="overline">Contact</Typography>
            </Link>
          </Grid>
        </Grid>
      </AppBar>
    </HideOnScroll>
  );
};

export default Title;
