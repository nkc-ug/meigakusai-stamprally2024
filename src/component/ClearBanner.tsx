import { Button, Card, Modal, Typography } from "@mui/material";
import { forwardRef, useRef, useState } from "react";
import { Exchange } from "./Exchange";

// forwardRef の型を正しく設定
const ExchangeWithRef = forwardRef<
  HTMLInputElement,
  { handleClose: () => void }
>((props, ref) => {
  return <Exchange {...props} ref={ref} />;
});

export const ClearBanner = () => {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null); // ref の型を指定

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        variant="contained"
        onClick={handleOpen}
        sx={{ borderRadius: "20px" }}
      >
        <Typography variant="h5">景品引換はこちらから！</Typography>
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Card
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            maxWidth: 552,
            width: "80%",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            textAlign: "center",
          }}
        >
          <ExchangeWithRef ref={inputRef} handleClose={handleClose} />
        </Card>
      </Modal>
    </>
  );
};
