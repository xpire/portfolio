import React from "react";
import {
  motion,
  useTransform,
  useMotionValue,
  useViewportScroll,
} from "framer-motion";

const AngelBeats = () => {
  // Animate on load
  const pathLength = useMotionValue(0);
  const fill = useTransform(
    pathLength,
    [0.5, 0.95, 1],
    ["#000000", "#666666", "#AAAAAA"]
  );
  const opacity = useTransform(pathLength, [0.15, 0.95], [0, 1]);
  const stroke = "hsl(0, 0%, 100%)";

  // Animate on scroll
  // const { scrollYProgress } = useViewportScroll();
  // const pathLength = useTransform(scrollYProgress, [0.1, 0.6], [0, 1]);
  // const stroke = "hsl(0, 0%, 100%)";
  // const fill = useTransform(
  //   scrollYProgress,
  //   [0.1, 0.5, 0.6],
  //   ["#000000", "#333333", "#FFFFFF"]
  // );
  // const opacity = useTransform(scrollYProgress, [0.1, 0.6], [0, 0.6]);

  // Gradient colour
  // const stroke = "#FC466B";
  // const fill = useTransform(
  //   scrollYProgress,
  //   [0.05, 0.6],
  //   ["#3F5EFB", "#FC466B"]
  // );
  // const opacity = useTransform(scrollYProgress, [0.1, 0.6], [0, 1]);

  return (
    <motion.svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 1920 495.49075"
      height="495.49075pt"
      width="1920pt"
      fill={fill} //"#FFFFFF"
      stroke={stroke}
      strokeWidth="20"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        width: "100vw",
        height: "100vh",
        opacity: 0.5,
      }}
    >
      <motion.path
        d="m 8884,8049 c 16,-53 69,-212 295,-879 94,-278 216,-638 271,-800 55,-162 163,-482 240,-710 77,-228 185,-548 240,-710 207,-616 231,-685 236,-700 7,-18 32,26 64,111 l 21,55 -81,240 c -44,131 -163,487 -265,789 -101,303 -281,838 -400,1190 -119,352 -263,782 -321,955 -59,177 -112,320 -121,327 -9,7 -48,43 -87,81 -108,103 -108,103 -92,51 z"
        style={{ opacity, pathLength }}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2 }}
        transform="matrix(0.1,0,0,-0.1,0,808.32278)"
      />
      <motion.path
        d="m 8842,7179 c -5,-13 -109,-321 -231,-684 -122,-363 -281,-838 -355,-1055 L 8123,5045 4062,5042 0,5040 v -105 -105 l 4161,2 4162,3 33,90 c 18,50 90,257 159,460 70,204 144,420 165,480 57,162 96,274 219,633 l 112,323 -36,92 c -124,316 -119,305 -133,266 z"
        style={{ opacity, pathLength }}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2 }}
        transform="matrix(0.1,0,0,-0.1,0,808.32278)"
      />
      <motion.path
        d="m 10876,6063 c 22,-72 194,-601 214,-658 l 18,-50 71,-3 c 47,-2 71,1 71,8 0,6 -27,91 -61,188 -33,97 -73,218 -89,267 -17,50 -38,101 -47,115 -20,28 -176,180 -185,180 -3,0 0,-21 8,-47 z"
        style={{ opacity, pathLength }}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2 }}
        transform="matrix(0.1,0,0,-0.1,0,808.32278)"
      />
      <motion.path
        d="m 10725,4953 c -53,-164 -107,-327 -120,-363 -45,-125 -415,-1255 -415,-1265 0,-5 45,-55 100,-110 67,-67 101,-94 104,-85 3,8 96,290 207,625 111,336 237,716 280,845 44,129 79,246 79,260 0,28 -114,368 -128,382 -5,5 -53,-124 -107,-289 z"
        style={{ opacity, pathLength }}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2 }}
        transform="matrix(0.1,0,0,-0.1,0,808.32278)"
      />
      <motion.path
        d="m 11391,5023 c -5,-10 -18,-47 -30,-83 -11,-36 -46,-135 -76,-220 -31,-85 -73,-203 -94,-262 l -38,-106 95,-102 c 52,-56 98,-98 102,-93 3,4 23,53 44,108 52,135 94,245 155,402 28,72 51,136 51,142 0,8 1057,11 3800,11 h 3800 v 110 110 h -3900 c -3703,0 -3900,-1 -3909,-17 z"
        style={{ opacity, pathLength }}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2 }}
        transform="matrix(0.1,0,0,-0.1,0,808.32278)"
      />
    </motion.svg>
  );
};

export default AngelBeats;
