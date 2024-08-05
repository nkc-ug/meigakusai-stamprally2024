import { Box, Button, Container, Stack, Typography } from "@mui/material";
import bgimg from "../assets/images/bg/home.png";
import { useNavigate } from "react-router-dom";
import jsondata from "../assets/json/stamplist.json";
import { StampView } from "../component/StampView";

export const StampList = () => {
  const nav = useNavigate();

  return (
    <Container disableGutters maxWidth="sm">
      <Stack justifyContent="center">
        <Container
          disableGutters
          sx={{
            padding: 2,
            textAlign: "center",
            backgroundImage: `url(${bgimg})`,
            backgroundSize: "auto 100vh",
            backgroundPosition: "center top",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Box>
            <Typography variant="h4" sx={{ marginBottom: 4 }}>
              スタンプ一覧
            </Typography>
            <Box>
              <StampView json={jsondata[0]} />
            </Box>
            <Box>
              <StampView json={jsondata[1]} />
            </Box>
            <Box>
              <StampView json={jsondata[2]} />
            </Box>
            <Box>
              <StampView json={jsondata[3]} />
            </Box>
            <Button
              variant="contained"
              size="large"
              sx={{ padding: 2, width: "25vh" }}
              onClick={() => {
                nav("/");
              }}
            >
              <Typography variant="h5">ホームへ戻る</Typography>
            </Button>
          </Box>
        </Container>
      </Stack>
    </Container>
  );
};
