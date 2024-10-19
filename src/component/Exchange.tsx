import { Button, Card, Typography } from "@mui/material";

type ModalProp = {
  handleClose?: () => void;
};

export const Exchange: React.FC<ModalProp> = ({ handleClose }) => {
  return (
    <Card
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
        textAlign: "center",
      }}
    >
      <Typography variant="h5">
        こちらの画面を引換所のスタッフにご提示ください！
      </Typography>
      <Button>交換する</Button>
      <Button
        onClick={() => {
          handleClose;
        }}
      >
        閉じる
      </Button>
    </Card>
  );
};
