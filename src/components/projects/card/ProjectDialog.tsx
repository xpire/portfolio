import React from "react";
import Dialog, { DialogProps } from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import styled from "styled-components";
import { motion } from "framer-motion";

type Props = {
  open: boolean;
  setOpen: (value: boolean) => void;
  title: string;
  content: React.ReactNode;
  src: string;
  external: string;
  category: string;
};

const StyledImg = styled(motion.img)`
  display: flex;
  align-items: center;
  height: auto;
`;

const ProjectDialog = ({
  open,
  setOpen,
  title,
  content,
  src,
  external,
  category,
}: Props) => {
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      scroll="body"
      maxWidth="md"
      fullWidth={true}
    >
      <DialogTitle>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2">{category}</Typography>
      </DialogTitle>
      <DialogActions>
        <Button
          // autoFocus
          onClick={() => window.open(external, "_blank")}
          color="primary"
        >
          See Source
        </Button>
      </DialogActions>
      <DialogContent dividers>
        {content}
        <Paper elevation={5}>
          <StyledImg
            src={src}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{ maxWidth: "100%" }}
          />
        </Paper>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;
