import React from "react";
import { memo, useRef } from "react";
import { motion, useInvertedScale, useMotionValue } from "framer-motion";
import { Link } from "react-router-dom";
import Title from "./Title";
import Image from "./Image";
import { openSpring, closeSpring } from "../../ui/animation.constants";
import { useInvertedBorderRadius } from "../../../utils/useInvertedBorderRadius.function";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import styled from "styled-components";

import ProjectDialog from "./ProjectDialog";

export interface CardData {
  id: string;
  category: string;
  title: string;
  pointOfInterest: number;
  backgroundColor: string;
  src: string;
  content: React.ReactNode;
  external: string;
}

interface Props extends CardData {
  isSelected: boolean;
  history: {
    push: (route: string) => void;
  };
}

const StyledCard = styled(Card)`
  // margin: 10vw;
`;

const ProjectCard = memo(
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
    external,
  }: Props) => {
    const [open, setOpen] = React.useState(false);
    // const handle;

    return (
      <motion.div whileHover={{ scale: 1.06 }}>
        <StyledCard>
          <CardActionArea onClick={() => setOpen(true)}>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="300"
              image={src}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {category}
              </Typography>
            </CardContent>
          </CardActionArea>
        </StyledCard>
        <ProjectDialog
          open={open}
          setOpen={setOpen}
          src={src}
          title={title}
          content={content}
          external={external}
        />
      </motion.div>
    );
  }
);

export default ProjectCard;
