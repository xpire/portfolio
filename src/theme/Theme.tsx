import React from "react";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";

let theme = createMuiTheme();
console.log(theme.typography.h1);
// theme.typography.h1 = {
//   ...theme.typography.h1,
//   fontSize: "6rem",
//   // "@media (min-width:600px)": {
//   //   fontSize: "4.5rem",
//   // },
//   [theme.breakpoints.up("xs")]: {
//     fontSize: "1",
//   },
//   [theme.breakpoints.up("sm")]: {
//     fontSize: "2",
//   },
//   [theme.breakpoints.up("md")]: {
//     fontSize: "3",
//   },
//   [theme.breakpoints.up("lg")]: {
//     fontSize: "4",
//   },
//   [theme.breakpoints.up("xl")]: {
//     fontSize: "5",
//   },
// };
theme = responsiveFontSizes(theme);

const Theme = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
