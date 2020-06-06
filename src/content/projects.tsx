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
          like how a human learns about the world, by focussing on the idea of
          cultivating a model's internal mental model of their environment such
          that the model can train using it's own imagination.
        </Typography>
        <Typography paragraph={true}>
          My specific section was training Mixed Density Recurrent Neural
          Network to predict the next game state and action.
        </Typography>
      </div>
    ),
    external: "https://github.com/ispark25/space-invaders",
  },
  {
    id: "tor",
    category: "Machine Learning, Algorithms",
    title: "Automatically Detecting Silences in Speech",
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
          The structure of the recordings was a sequence of words spoken with
          large gaps between each word, with the occasional remark from the
          interviewer. For such a seemingly simplistic problem, many existing
          silence detecting solutions I tried did not work. Hence, I decided to
          build my own, and also explore how silence detection works.
        </Typography>
        <Typography paragraph={true}>
          I used the python package <code>librosa</code> to conduct the audio
          analysis. Through my experimentations with this Jupyter Notebook, I
          fixed DC offsets and used the RMS of the audio signal to calculate
          when noise occured to detect the silences.
        </Typography>
      </div>
    ),
    external: "https://github.com/xpire/SilenceDetection",
  },
  {
    id: "sphinx",
    category: "Security, Algorithms",
    title: "Implementation of Sphinx Password Store Protocol",
    pointOfInterest: 260,
    backgroundColor: "#5DBCD2",
    src: sphinxSrc,
    content: (
      <div>
        <Typography paragraph={true}>
          In this project, I built a full-stack implementation of a password
          manager referenced by the sphinx white paper, based on Elliptic Curve
          Cryptography.
        </Typography>
        <Typography paragraph={true}>
          Sphinx stands for "a password Store that Perfectly Hides from Itself
          (No eXaggeration!)". It is a novel implementation of a password store
          which{" "}
          <b>
            remains secure even when the password manager itself has been
            compromised.
          </b>
        </Typography>
        <Typography paragraph={true}>
          Sphinx relies on device-enhanced password authenticated key exchange,
          by storing part of the password on an external device, such that an
          attacker breaking into this device learns no information about the
          master password or the user’s individual passwords.
        </Typography>
        <Typography paragraph={true}>
          I created an Interactive Python Jupyter Notebook containing my
          implementation of core algorithms: Octet String to Integer Primitives,
          HashToBase function, Simple SWU Hashing algorithm, Oblivious
          Pseudo-Random Function and an API flask server for backend.
        </Typography>
        <Typography paragraph={true}>
          I also completed a mathematically complete implementation of the above
          functions in JavaScript with sjcl.js for front-end cryptographic
          capability and a fully featured React.js front-end chrome extension
          providing full user experience for MVP.
        </Typography>{" "}
        <Typography paragraph={true}>
          Here is a live demo of the chrome extension:
        </Typography>
        <div style={{ paddingTop: "56.25%", position: "relative" }}>
          <iframe
            src="https://www.youtube.com/embed/jta72Zj-l14"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
            width="100%"
            height="100%"
            style={{
              top: 0,
              left: 0,
              position: "absolute",
            }}
          />
        </div>
      </div>
    ),
    external: "https://github.com/xpire/somethingAwesomeSphinx",
  },
];

export default cardData;
