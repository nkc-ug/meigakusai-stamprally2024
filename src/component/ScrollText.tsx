import { Typography } from "@mui/material";
import { TypographyProps } from "@mui/material/Typography";

type ScrollTextProps = {
  text: string;
  variantValue?: TypographyProps["variant"];
};

export const ScrollText: React.FC<ScrollTextProps> = ({
  text,
  variantValue = "body1",
}) => {
  return <Typography variant={variantValue}>{text}</Typography>;
};
