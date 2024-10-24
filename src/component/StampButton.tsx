import { Box, Button, Card, Modal } from "@mui/material";
import React, { useState } from "react";
import { ShopData } from "../types/Stampdatatype";
import { StampImage } from "./StampImage";
import { StampDetail } from "./StampDetail";

type StampButtonProps = {
  stampdata: ShopData;
  isGet: boolean;
};

export const StampButton: React.FC<StampButtonProps> = ({
  stampdata,
  isGet,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box
        component="img"
        src={StampImage(stampdata.imagepath)}
        onClick={handleOpen}
        sx={{
          width: "100%",
          height: "auto",
          filter: !isGet ? "saturate(0%) brightness(0.5)" : "",
          marginBottom: "auto",
        }}
        alt={`${stampdata.name}のスタンプ`}
      ></Box>
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
          <StampDetail stampdata={stampdata} isGet={isGet}>
            <Button
              onClick={handleClose}
              variant="contained"
              sx={{ marginTop: "5%", padding: "3%", width: "200px" }}
            >
              閉じる
            </Button>
          </StampDetail>
        </Card>
      </Modal>
    </>
  );
};
