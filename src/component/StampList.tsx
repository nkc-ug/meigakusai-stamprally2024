import { Box, Card, Stack, Typography } from "@mui/material";
import jsondata from "../assets/json/stamplist.json";
import { StampView } from "./StampView";
import { StampCount } from "./StampCount";
import { ClearBanner } from "./ClearBanner";
import { NotClearBanner } from "./NotClearBanner";

export const StampList = () => {
  const ClearJudge = () => {
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
    if (totalcount >= TOTALCOUNT_REQUIRED && areacount >= AREACOUNT_REQUIRED) {
      return true;
    }
    return false;
  };
  const isStampRallyClear = ClearJudge();
  return (
    <Stack justifyContent="center">
      <Box>
        <Typography variant="h4" sx={{ marginBottom: 4 }}>
          スタンプ一覧
        </Typography>
        {isStampRallyClear ? <ClearBanner /> : <NotClearBanner />}
        {jsondata.map((json, index) => {
          return (
            <Card
              key={index}
              sx={{ borderRadius: "20px", marginY: "20px", padding: "20px" }}
            >
              <StampView json={json} />
            </Card>
          );
        })}
      </Box>
    </Stack>
  );
};
