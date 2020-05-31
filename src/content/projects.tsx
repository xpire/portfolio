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
        <Typography paragraph={true}>
          In this project, we applied the World Models Deep Learning Framework
          to an Arcade Game Space Invaders.
        </Typography>
        <Typography paragraph={true}>
          World Models is a Deep Learning framework which trains a network much
          like a human learns about the world, by focussing on the idea of
          cultivating a model's version of the environment such that the model
          can train using it's own imagination.
        </Typography>
        <Typography paragraph={true}>
          My specific section was training Mixed Density Recurrent Neural
          Network to predict the next game state and action.
        </Typography>
      </div>
    ),
  },
  {
    id: "tor",
    category: "Machine Learning, Algorithms",
    title: "Automatically Detecting silences in speech",
    pointOfInterest: 120,
    backgroundColor: "#959684",
    src: torSrc,
    content: (
      <div>
        <Typography paragraph={true}>
          In this project, I was tasked with cleaning hundreds of spoken
          excerpts of Dementia Patients' speech data.
        </Typography>
        <Typography paragraph={true}>
          The structure of the recordings were a sequence of words spoken with
          large gaps between each word, with the occasional remark from the
          interviewer. For such a seemingly simplistic problem, many existing
          silence detecting solutions I tried did not work. Hence, I decided to
          build my own, and also explore how silence detection works.
        </Typography>
        <Typography paragraph={true}>
          I used the python package <code>librosa</code> to conduct the audio
          analysis. Through my experimentations with this Jupyter Notebook, I
          fixed DC offsets, used the RMS of the audio signal to calculate when
          noise occured to detect the silences.
        </Typography>
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
