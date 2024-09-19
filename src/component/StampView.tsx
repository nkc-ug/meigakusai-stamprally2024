import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { LocationStamp } from "../types/Stampdatatype";
import { GetStampData } from "./StampData";

type LocationStampProp = {
  json: LocationStamp;
};

export const StampView: React.FC<LocationStampProp> = ({ json }) => {
  const imagespath = "src/assets/images/stamp/";
  const shoplist = json.shop.map((data, index) => {
    const gotStamp = GetStampData(data.id);
    return (
      <Grid item sx={{ width: "7rem", margin: "4px" }} key={index} xs={4}>
        <Box sx={{ position: "relative" }}>
          {!gotStamp && (
            <Box
              sx={{
                position: "absolute",
                zIndex: "1000",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <img
                src="src/assets/images/symbol/unacquired.png"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                alt={"未取得マーク"}
              />
            </Box>
          )}
          <img
            src={imagespath + data.imagepath}
            style={{
              width: "100%",
              height: "auto",
              filter: !gotStamp ? "saturate(0%) brightness(0.5)" : "",
            }}
            alt={`${data.name}のスタンプ`}
          />
        </Box>
        <Typography variant="body1" sx={{ lineHeight: "1.0rem" }}>
          {data.name}
        </Typography>
        <Typography
          variant="body1"
          sx={{ lineHeight: "1.0rem", paddingTop: "2px", fontWeight: "bold" }}
        >
          {data.classname}
        </Typography>
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
        sx={{
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        {shoplist}
      </Grid>
    </Box>
  );
};
