import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { AreaStamp } from "../types/Stampdatatype";
import { GetStampData } from "./StampData";
import { StampImage } from "./StampImage";
import { StampCount } from "./StampCount";

type AreaStampProp = {
  json: AreaStamp;
};

export const StampView: React.FC<AreaStampProp> = ({ json }) => {
  const stampcount = StampCount(json.areaId);
  const stampcounttext = `${stampcount.count} / ${stampcount.max} (目標数 ${stampcount.required})`;

  const shoplist = json.shop.map((data, index) => {
    const gotStamp = GetStampData(data.id);
    return (
      <Grid item sx={{ margin: "2%" }} key={index} xs={5}>
        <Box sx={{ position: "relative" }}>
          <Box
            component="img"
            src={StampImage(data.imagepath)}
            style={{
              width: "100%",
              height: "auto",
              filter: !gotStamp ? "saturate(0%) brightness(0.5)" : "",
              marginBottom: "auto",
            }}
            alt={`${data.name}のスタンプ`}
          />
        </Box>
      </Grid>
    );
  });

  return (
    <Box>
      <Box>
        <Typography variant="h5" sx={{ borderBottom: "2px solid #253958" }}>
          {json.area}
        </Typography>
        <Typography variant="h6">{stampcounttext}</Typography>
      </Box>
      <Grid
        container
        sx={{
          alignItems: "center",
          justifyContent: "space-around",
          justify: "flex-start",
        }}
      >
        {shoplist}
      </Grid>
    </Box>
  );
};
