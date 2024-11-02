import { forwardRef } from "react";
import { Box, Button, Typography } from "@mui/material";
import { StampCount } from "./StampCount";

interface TermsProps {
  handleClose: () => void;
}

export const Terms = forwardRef<HTMLInputElement, TermsProps>((props, ref) => {
  const TOTALCOUNT_REQUIRED = 5;
  let totalcount = 0;
  const AREA_IDS = ["0", "1", "3", "10", "EV"];
  for (const areaId of AREA_IDS) {
    const areaData = StampCount(areaId);
    totalcount += areaData.count;
  }

  return (
    <Box ref={ref}>
      <Typography variant="h4">条件一覧</Typography>
      <Box margin="0.25rem">
        <Box margin="0.1rem">
          <Typography
            variant="h6"
            color={totalcount < TOTALCOUNT_REQUIRED ? "red" : "green"}
          >
            {totalcount < TOTALCOUNT_REQUIRED ? "×" : "◯"}
            合計{TOTALCOUNT_REQUIRED}個以上のスタンプを獲得している
          </Typography>
          <Typography>現在 {totalcount}個</Typography>
        </Box>
      </Box>
      <Button onClick={props.handleClose}>閉じる</Button>
    </Box>
  );
});
