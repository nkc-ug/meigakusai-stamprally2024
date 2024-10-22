import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { AreaStamp } from "../types/Stampdatatype";
import { GetStampData } from "./StampData";
//import unacquired from "/src/assets/images/symbol/unacquired.png";
import { StampImage } from "./StampImage";
import { StampCount } from "./StampCount";

type AreaStampProp = {
  json: AreaStamp;
};

export const StampView: React.FC<AreaStampProp> = ({ json }) => {
  const shoplist = json.shop.map((data, index) => {
    const gotStamp = GetStampData(data.id);
    return (
      <Grid item sx={{ width: "7rem", margin: "4px" }} key={index} xs={4}>
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
        <Typography variant="body1" sx={{ lineHeight: "1.0rem" }}>
          {data.name}
        </Typography>
        <Typography
          variant="body1"
          gutterBottom={true}
          sx={{ lineHeight: "1.0rem", paddingTop: "2px", fontWeight: "bold" }}
        >
          {data.classname}
        </Typography>
      </Grid>
    );
  });
  const stampcount = StampCount(json.areaId);
  const stampcounttext = `${stampcount.count} / ${stampcount.max} (目標数 ${stampcount.required})`;
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
