import { Box, Button, TextField, Typography } from "@mui/material";
import { useState, forwardRef } from "react";
import { GetStampData, SetStampData, ShuffleStampData } from "./StampData";
import { HashingSha1 } from "./HashingSha1";

interface ExchangeProps {
  handleClose: () => void;
}

export const Exchange = forwardRef<HTMLInputElement, ExchangeProps>(
  (props, ref) => {
    const [pass, setPass] = useState("");
    const [error, setError] = useState(false);
    const [isExchanged, setIsExchanged] = useState(() => {
      return GetStampData(import.meta.env.VITE_CLEARCODE) === false
        ? false
        : true;
    });
    const passcheck = () => {
      if (import.meta.env.VITE_STAFFCODE === pass) {
        setError(false);
        Exchanged();
      } else {
        setError(true);
      }
    };
    const Exchanged = () => {
      SetStampData(HashingSha1(import.meta.env.VITE_CLEARCODE));
      ShuffleStampData();
      setIsExchanged(true);
    };

    return (
      <>
        <Typography variant="h6">
          名学祭を楽しんでいただき
          <br />
          ありがとうございます！
        </Typography>
        {isExchanged ? (
          <Typography variant="h5">
            景品は引換済みです
            <br />
            引き続き名学祭を
            <br />
            楽しんでください！
          </Typography>
        ) : (
          <Box display="flex" flexDirection="column">
            <Typography variant="h5">
              景品引換の際は
              <br />
              こちらの画面を
              <br />
              引換所のスタッフに
              <br />
              ご提示ください！
            </Typography>
            <Box sx={{ padding: 3, margin: "auto" }}>
              {error ? (
                <TextField
                  error
                  ref={ref}
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
                  ref={ref}
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
        )}
        <Button onClick={props.handleClose}>閉じる</Button>
      </>
    );
  }
);
