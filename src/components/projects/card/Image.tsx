import React from "react";
import { motion, useInvertedScale } from "framer-motion";
import { closeSpring } from "../../ui/animation.constants";
import styled from "styled-components";

type ImageProps = {
  id: string;
  isSelected: boolean;
  pointOfInterest: number;
  backgroundColor: string;
  src: string;
};

const CardImageContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  height: 420px;
  width: 100vw;
  transform: translateZ(0);
`;

const Image = ({
  id,
  isSelected,
  pointOfInterest = 0,
  backgroundColor,
  src,
}: ImageProps) => {
  const inverted = useInvertedScale();

  return (
    <CardImageContainer
      style={{ ...inverted, backgroundColor, originX: 0, originY: 0 }}
    >
      <motion.img
        src={src}
        alt=""
        initial={false}
        animate={isSelected ? { x: -20, y: -20 } : { x: pointOfInterest, y: 0 }}
        transition={closeSpring}
      />
    </CardImageContainer>
  );
};

export default Image;
