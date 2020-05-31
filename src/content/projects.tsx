import { CardData } from "../components/projects/card/Card";
import worldmodelSrc from "./image/worldmodels.png";
import torSrc from "./image/tor.png";
import sphinxSrc from "./image/sphinx.png";
import React from "react";
import Typography from "@material-ui/core/Typography";

const cardData: CardData[] = [
  {
    id: "worldmodels",
    category: "Machine Learning",
    title: "World Models Implementation for Space Invaders",
    pointOfInterest: 80,
    backgroundColor: "#814A0E",
    src: worldmodelSrc,
    content: (
      <div>
        <Typography>This is world Models</Typography>
      </div>
    ),
  },
  {
    id: "tor",
    category: "Machine Learning, Algorithms",
    title: "Automatically Detecting silences in speech for Data Preparation",
    pointOfInterest: 120,
    backgroundColor: "#959684",
    src: torSrc,
    content: (
      <div>
        <Typography>This is Taste of Research</Typography>
      </div>
    ),
  },
  {
    id: "sphinx",
    category: "Security, Algorithms",
    title: "Implementation of sphinx password store protocol",
    pointOfInterest: 260,
    backgroundColor: "#5DBCD2",
    src: sphinxSrc,
    content: (
      <div>
        <Typography>This is sphinx</Typography>
      </div>
    ),
  },
];

export default cardData;
