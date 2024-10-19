import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { useState } from "react";

interface ExchangeProps {
  handleClose: () => void;
}

export const Exchange: React.FC<ExchangeProps> = ({ handleClose }) => {
  const [pass, setPass] = useState("");
  const [error, setError] = useState(false);
  const passcheck = () => {
    console.log(import.meta.env.VITE_STAFFCODE);
    if (import.meta.env.VITE_STAFFCODE === pass) {
      setError(false);
      //ここから引換の処理（未実装）
    } else {
      setError(true);
    }
  };

  return (
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
      <Box>
        <Typography variant="h6">
          名学祭を楽しんでいただきありがとうございます！
        </Typography>
        <Typography variant="h5">
          景品引換の際はこちらの画面を
          <br />
          引換所のスタッフにご提示ください！
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column">
        <Box sx={{ padding: 3, margin: "auto" }}>
          {error ? (
            <TextField
              error
              helperText="スタッフコードが違います"
              label="スタッフコード"
              variant="outlined"
              type="password"
              value={pass}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setPass(event.target.value);
              }}
            />
          ) : (
            <TextField
              label="スタッフコード"
              variant="outlined"
              type="password"
              value={pass}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setPass(event.target.value);
              }}
            />
          )}
        </Box>
        <Button onClick={passcheck}>交換する</Button>
      </Box>
      <Button onClick={handleClose}>閉じる</Button>
    </Card>
  );
};
