import { Box, Typography } from "@mui/material";
import { ShopData } from "../types/Stampdatatype";
import React, { ReactNode } from "react";
import { StampImage } from "./StampImage";

type StampDetailProps = {
  stampdata: ShopData;
  isGet: boolean;
  children: ReactNode;
};

export const StampDetail: React.FC<StampDetailProps> = ({
  stampdata,
  isGet,
  children,
}) => {
  return (
    <Box>
      <Typography variant="h5">{stampdata.name}</Typography>
      <Box
        component="img"
        src={StampImage(stampdata.imagepath)}
        alt={`${stampdata.name}のスタンプ`}
        sx={{
          width: "100%",
          height: "auto",
          filter: !isGet ? "saturate(0%) brightness(0.5)" : "",
          padding: "5%",
        }}
      />
      <Typography variant="h5">{stampdata.classname}</Typography>
      {children}
    </Box>
  );
};
