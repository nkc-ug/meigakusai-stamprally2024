import { Box, Button, Container, Typography } from "@mui/material";
import bgimg from "../assets/images/bg/home.png";
import { useNavigate } from "react-router-dom";

export const StampGet = () => {
  const nav = useNavigate();

  return (
    <Container
      sx={{
        height: "100vh",
        padding: 2,
        textAlign: "center",
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "auto 100vh",
        backgroundPosition: "center top",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box>
        <Typography variant="h3">スタンプゲット！</Typography>
        <Box>
          <img src="src/assets/images/stamp/nkc-ug.jpg" />
        </Box>

        <Button
          variant="contained"
          size="large"
          sx={{ padding: 2, width: "25vh" }}
          onClick={() => {
            nav("/stamplist");
          }}
        >
          スタンプ一覧へ
        </Button>
      </Box>
    </Container>
  );
};
