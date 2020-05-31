import React from "react";
import Dialog, { DialogProps } from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

import { motion } from "framer-motion";

type Props = {
  open: boolean;
  setOpen: (value: boolean) => void;
  title: string;
  content: React.ReactNode;
  src: string;
  external: string;
};
const ProjectDialog = ({
  open,
  setOpen,
  title,
  content,
  src,
  external,
}: Props) => {
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      scroll="body"
      maxWidth="md"
      fullWidth={true}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent dividers>
        {content}
        <motion.img
          src={src}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          style={{
            // width: "80vw",
            maxWidth: "100%",
            display: "flex",
            alignItems: "center",
            height: "auto",
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button
          // autoFocus
          onClick={() => window.open(external, "_blank")}
          color="primary"
        >
          See Source
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProjectDialog;
