import { Box, Typography, TypographyProps } from "@mui/material";
import React, { ReactNode, useState } from "react";
import Marquee from "react-fast-marquee";

type ScrollTextProps = {
  variant?: TypographyProps["variant"];
  children: ReactNode;
};

export const ScrollText: React.FC<ScrollTextProps> = ({
  variant = "body1",
  children,
}) => {
  const [onScroll, setScroll] = useState(false);
  return (
    <Box
      onClick={() => {
        setScroll(!onScroll);
      }}
    >
      <Marquee speed={35} play={onScroll}>
        <Typography variant={variant} sx={{ margin: "0 2em" }}>
          {children}
        </Typography>
      </Marquee>
    </Box>
  );
};
