import { Button, Typography } from "@mui/material";

export const ClearBanner = () => {
  return (
    <Button
      onClick={() => {
        console.log("交換画面遷移");
      }}
    >
      <Typography variant="h4">景品交換画面はこちらから</Typography>
    </Button>
  );
};
