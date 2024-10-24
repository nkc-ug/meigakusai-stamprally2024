import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { AreaStamp } from "../types/Stampdatatype";
import { GetStampData } from "./StampData";
import { StampCount } from "./StampCount";
import { StampButton } from "./StampButton";

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
          <StampButton stampdata={data} isGet={gotStamp} />
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
