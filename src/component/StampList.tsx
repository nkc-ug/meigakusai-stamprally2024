import { Box, Card, Stack, Typography } from "@mui/material";
import jsondata from "../assets/json/stamplist.json";
import { StampView } from "./StampView";

export const StampList = () => {
  return (
    <Stack justifyContent="center">
      <Box>
        <Typography variant="h4" sx={{ marginBottom: 4 }}>
          スタンプ一覧
        </Typography>
        {jsondata.map((json, index) => {
          return (
            <Card key={index} sx={{ borderRadius: "20px", marginY: "20px", padding: "20px" }}>
              <StampView json={json} />
            </Card>
          );
        })}
      </Box>
    </Stack>
  );
};
