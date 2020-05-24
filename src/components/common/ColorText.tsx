import React from "react";
import Typography from "@material-ui/core/Typography";
import { motion } from "framer-motion";
import { TRANSITION } from "../ui/animation.constants";

type Props = {
  children: string;
  key?: string;
  variant?:
    | "inherit"
    | "button"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "overline"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "srOnly"
    | undefined;
  duration?: number;
};

const ColorText = ({ children, ...restProps }: Props) => {
  return (
    <motion.span
      style={{ color: "#3F5EFB" }}
      animate={{ color: "#FC466B" }}
      transition={{ duration: restProps!.duration || TRANSITION }}
    >
      <Typography {...restProps}>{children}</Typography>
    </motion.span>
  );
};

export default ColorText;
