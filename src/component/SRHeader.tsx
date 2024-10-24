import { Typography } from "@mui/material";
import "/src/assets/css/globals.css";

export const SRHeader = () => {
  return (
    <Typography
      variant="h3"
      sx={{ marginY: 4, fontFamily: '"Potta One", system-ui' }}
    >
      名学祭
      <br />
      スタンプラリー
    </Typography>
  );
};
