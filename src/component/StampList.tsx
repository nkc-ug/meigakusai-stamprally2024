import { Box, Card, Stack, Typography } from "@mui/material";
import jsondata from "../assets/json/stamplist.json";
import { StampView } from "./StampView";
import { StampCount } from "./StampCount";
import { ClearBanner } from "./ClearBanner";

export const StampList = () => {
  const ClearJudge = () => {
    const AREA_IDS = ["0", "1", "2", "3", "10"];
    for (const areaId of AREA_IDS) {
      const areaData = StampCount(areaId);
      if (areaData.count < areaData.required) {
        return false;
      }
    }
    return true;
  };
  const isStampRallyClear = ClearJudge();
  console.log(isStampRallyClear);
  return (
    <Stack justifyContent="center">
      <Box>
        <Typography variant="h4" sx={{ marginBottom: 4 }}>
          スタンプ一覧
        </Typography>
        {isStampRallyClear ? <ClearBanner /> : ""}
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
