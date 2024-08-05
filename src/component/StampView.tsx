import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { LocationStamp } from "../types/Stampdatatype";

type LocationStampProp = {
  json: LocationStamp;
};

export const StampView: React.FC<LocationStampProp> = ({ json }) => {
  const imagespath = "src/assets/images/stamp/";
  const shoplist = json.shop.map((data, index) => {
    return (
      <Grid item sx={{ width: "27%", margin: "4px" }} key={index}>
        <img
          src={imagespath + data.imagepath}
          style={{ width: "100%", height: "auto" }}
          alt={data.name}
        />
        <Typography variant="h6">{data.name}</Typography>
        <Typography variant="h6">{data.classname}</Typography>
      </Grid>
    );
  });
  return (
    <Box>
      <Typography variant="h5" sx={{ borderBottom: "2px solid #253958" }}>
        {json.location}
      </Typography>
      <Grid
        container
        spacing={3}
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {shoplist}
      </Grid>
    </Box>
  );
};
