import React from "react";
import Typography from "@material-ui/core/Typography";
import { motion } from "framer-motion";

type KnownStyles = {
  position?: "absolute";
  display?: "flex";
  flexDirection?: "column";
  alignItems?: "flex-start" | "flex-end";
  paddingLeft?: "5vw";
  paddingRight?: "5vw";
  paddingTop?: "10vh";
  marginLeft?: "5vw";
  marginRight?: "5vw";
  marginTop?: "10vh";
  zIndex?: 2;
};

type Props = {
  children: React.ReactNode;
  style?:
    | React.StyleHTMLAttributes<CSSStyleDeclaration | HTMLElement>
    | KnownStyles;
};

const FadeIn = ({ children, style }: Props) => {
  return (
    <motion.div
      style={{ y: "-40px", opacity: 0, ...style }}
      animate={{ y: "0px", opacity: 1 }}
      transition={{ type: "spring", stiffness: 10 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
