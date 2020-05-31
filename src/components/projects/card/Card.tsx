import React from "react";
import { memo, useRef } from "react";
import { motion, useInvertedScale, useMotionValue } from "framer-motion";
import { Link } from "react-router-dom";
import Title from "./Title";
import Image from "./Image";
import { openSpring, closeSpring } from "../../ui/animation.constants";
import { useInvertedBorderRadius } from "../../../utils/useInvertedBorderRadius.function";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

export interface CardData {
  id: string;
  category: string;
  title: string;
  pointOfInterest: number;
  backgroundColor: string;
  src: string;
  content: React.ReactNode;
}

interface Props extends CardData {
  isSelected: boolean;
  history: {
    push: (route: string) => void;
  };
}

const dismissDistance = 150;

const ContentContainer = styled.div`
  padding: 460px 35px 35px 35px;
  max-width: 700px;
  width: 90vw;
`;

const Card = memo(
  ({
    isSelected,
    id,
    title,
    category,
    history,
    pointOfInterest,
    backgroundColor,
    src,
    content,
  }: Props) => {
    const y = useMotionValue(0);
    const zIndex = useMotionValue(isSelected ? 2 : 1);

    // Maintain the visual border radius when we perform the layoutTransition by inverting its scaleX/Y
    const inverted = useInvertedBorderRadius(20);

    // We'll use the opened card element to calculate the scroll constraints
    const cardRef = useRef(null);

    function checkSwipeToDismiss() {
      y.get() > dismissDistance && history.push("/");
    }

    function checkZIndex(latest: any) {
      if (isSelected) {
        zIndex.set(2);
      } else if (!isSelected && latest.scaleX < 1.01) {
        zIndex.set(0);
      }
    }

    // When this card is selected, attach a wheel event listener
    const containerRef = useRef(null);

    return (
      <li ref={containerRef} className={`card`}>
        <Overlay isSelected={isSelected} />
        <div className={`card-content-container ${isSelected && "open"}`}>
          <motion.div
            ref={cardRef}
            className="card-content"
            style={{ ...inverted, zIndex, y }}
            layoutTransition={isSelected ? openSpring : closeSpring}
            drag={isSelected ? "y" : false}
            onDrag={checkSwipeToDismiss}
            onUpdate={checkZIndex}
          >
            <Image
              id={id}
              isSelected={isSelected}
              pointOfInterest={pointOfInterest}
              backgroundColor={backgroundColor}
              src={src}
            />
            <Title title={title} category={category} isSelected={isSelected} />
            <ContentContainer>{content}</ContentContainer>
          </motion.div>
        </div>
        {!isSelected && <Link to={id} className={`card-open-link`} />}
      </li>
    );
  },
  (prev, next) => prev.isSelected === next.isSelected
);

export default Card;

const Overlay = ({ isSelected }: { isSelected: boolean }) => (
  <motion.div
    initial={false}
    animate={{ opacity: isSelected ? 1 : 0 }}
    transition={{ duration: 0.2 }}
    style={{ pointerEvents: isSelected ? "auto" : "none" }}
    className="overlay"
  >
    <Link to="/" />
  </motion.div>
);
