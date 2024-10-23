import { Typography, TypographyVariant } from "@mui/material";
import React, { ReactNode } from "react";
import Marquee from "react-fast-marquee";

type ScrollTextProps = {
  variant: TypographyVariant;
  children: ReactNode;
};

export const ScrollText: React.FC<ScrollTextProps> = ({
  variant = "body1",
  children,
}) => {
  return (
    <Marquee>
      <Typography variant={variant} sx={{ margin: "0 2em" }}>
        {children}
      </Typography>
    </Marquee>
  );
};
