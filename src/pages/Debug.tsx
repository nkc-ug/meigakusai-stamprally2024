import { Button, Container } from "@mui/material";
import { StampCount } from "../component/StampCount";

export const Debug = () => {
  const DebugButton = () => {
    const text = "1";
    console.log(StampCount(text)); // JSONデータを参照
  };

  return (
    <Container disableGutters maxWidth="sm">
      <Button onClick={DebugButton}>Read to JSON</Button>
    </Container>
  );
};
