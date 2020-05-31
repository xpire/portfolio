import React from "react";
import Dialog, { DialogProps } from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { motion } from "framer-motion";

type Props = {
  open: boolean;
  setOpen: (value: boolean) => void;
  title: string;
  content: React.ReactNode;
  src: string;
};
const ProjectDialog = ({ open, setOpen, title, content, src }: Props) => {
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      scroll="body"
      maxWidth="lg"
      fullWidth={true}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
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
        {content}
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;
