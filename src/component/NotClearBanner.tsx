import { Button, Card, Modal, Typography } from "@mui/material";
import { forwardRef, useRef, useState } from "react";
import { Terms } from "./Terms";

// forwardRef の型を正しく設定
const TermsWithRef = forwardRef<HTMLInputElement, { handleClose: () => void }>(
  (props, ref) => {
    return <Terms {...props} ref={ref} />;
  }
);

export const NotClearBanner = () => {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null); // ref の型を指定

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        variant="contained"
        onClick={handleOpen}
        sx={{
          borderRadius: "20px",
          padding: "0.75rem",
          width: "90%",
          backgroundColor: "#666",
          "&:hover": {
            backgroundColor: "#666",
          },
        }}
      >
        <Typography variant="h5">条件未達成</Typography>
      </Button>
      <Typography>こちらをタップすると条件を確認できます！</Typography>
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
          <TermsWithRef ref={inputRef} handleClose={handleClose} />
        </Card>
      </Modal>
    </>
  );
};
