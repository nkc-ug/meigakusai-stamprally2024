import { forwardRef } from "react";
import { Box, Button, Typography } from "@mui/material";
import { StampCount } from "./StampCount";

interface TermsProps {
  handleClose: () => void;
}

export const Terms = forwardRef<HTMLInputElement, TermsProps>((props, ref) => {
  const TOTALCOUNT_REQUIRED = 10;
  const AREACOUNT_REQUIRED = 3;
  let totalcount = 0;
  let areacount = 0;
  const AREA_IDS = ["0", "1", "3", "10", "EV"];
  for (const areaId of AREA_IDS) {
    const areaData = StampCount(areaId);
    totalcount += areaData.count;
    if (areaData.count > 0) areacount++;
  }

  return (
    <Box ref={ref}>
      <Typography variant="h4">条件一覧</Typography>
      <Box margin="0.25rem">
        <Box margin="0.1rem">
          <Typography
            variant="h6"
            color={areacount < AREACOUNT_REQUIRED ? "red" : "green"}
          >
            {areacount < AREACOUNT_REQUIRED ? "×" : "◯"}
            ３つ以上のエリアを回っている
          </Typography>
          <Typography>現在 {areacount}エリア</Typography>
        </Box>
        <Box margin="0.1rem">
          <Typography
            variant="h6"
            color={totalcount < TOTALCOUNT_REQUIRED ? "red" : "green"}
          >
            {totalcount < TOTALCOUNT_REQUIRED ? "×" : "◯"}
            合計10個以上のスタンプを獲得している
          </Typography>
          <Typography>現在 {totalcount}個</Typography>
        </Box>
      </Box>
      <Button onClick={props.handleClose}>閉じる</Button>
    </Box>
  );
});
