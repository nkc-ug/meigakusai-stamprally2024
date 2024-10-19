import { Box, Button } from "@mui/material";
import { SetStampData } from "../component/StampData";

export const Debug = () => {
  const DebugButton = () => {
    const STAMPLIST = [
      "f30c0ea9c9848444c8a0c012958efcb3de0db0d7",
      "7cf2fac3a658b901bf33a0eec0692e1568616ee1",
      "0132f921ab784fa8dc8b7f04b7a0fe2c9952f29a",
      "4bac7560cfd00fad9df534c78236891218b155ff",
      "814030d185205086c8325a3052494b5556bd47c6",
      "8b27245f5f0cce45a96f5f878eac168784e1f5c1",
      "e135fb715d9433d0076554810ab3c0dd53d1c45e",
      "b073b7bb01d5a5ff430126919b2f650192a31248",
      "f0f64073c0fa3a83bec22b418bb4e549cce86f19",
      "9786ed4e4316289f3ee6b9ef912bba4b9787da69",
    ];
    for (const str of STAMPLIST) {
      SetStampData(str);
    }
  };

  return (
    <Box>
      <Button onClick={DebugButton}>目標達成</Button>
    </Box>
  );
};
