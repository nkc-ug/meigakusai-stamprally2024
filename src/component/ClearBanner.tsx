import { Button, Typography } from "@mui/material";

export const ClearBanner = () => {
  return (
    <Button
      variant="outlined"
      onClick={() => {
        console.log("交換画面遷移");
      }}
      sx={{ border: "solid 5px", borderRadius: "10px" }}
    >
      <Typography variant="h4">景品交換画面はこちらから</Typography>
    </Button>
  );
};
