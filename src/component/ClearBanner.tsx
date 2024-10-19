import { Button, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { Exchange } from "./Exchange";

export const ClearBanner = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button
        variant="outlined"
        onClick={handleOpen}
        sx={{ border: "solid 5px", borderRadius: "10px" }}
      >
        <Typography variant="h4">景品引換用画面</Typography>
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Exchange handleClose={handleClose} />
      </Modal>
    </>
  );
};
