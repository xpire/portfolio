import React from "react";
import { motion, useInvertedScale } from "framer-motion";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

import { openSpring, closeSpring } from "../../ui/animation.constants";

type scaleProps = {
  x: number;
  y: number;
  scaleX: number;
  scaleY: number;
};
const scaleTranslate = ({ x, y, scaleX, scaleY }: scaleProps) =>
  `scaleX(${scaleX}) scaleY(${scaleY}) translate(${x}, ${y}) translateZ(0)`;

type TitleProps = {
  title: string;
  category: string;
  isSelected: boolean;
};

const TitleContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  max-width: 300px;
`;

const Title = ({ title, category, isSelected }: TitleProps) => {
  const inverted = useInvertedScale();
  const x = isSelected ? 30 : 15;
  const y = x;

  return (
    <TitleContainer
      initial={false}
      animate={{ x, y }}
      transition={isSelected ? openSpring : closeSpring}
      transformTemplate={scaleTranslate}
      style={{ ...inverted, originX: 0, originY: 0 }}
    >
      <Typography variant="h5" align="left">
        {category}
      </Typography>
      <Typography variant="h3" align="left">
        {title}
      </Typography>
    </TitleContainer>
  );
};

export default Title;
