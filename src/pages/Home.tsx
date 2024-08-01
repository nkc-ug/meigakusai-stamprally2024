import { Box, Button, Container, Grid, Typography } from "@mui/material";
import bgimg from "../assets/images/bg/home.png";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const nav = useNavigate();

  return (
    <Container
      maxWidth="sm"
      sx={{
        padding: "0px",
        minHeight: "100vh",
        height: "100%",
        width: "100vw",
        textAlign: "center",
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography variant="h3" sx={{ marginBottom: 4 }}>
          名学祭スタンプラリー
        </Typography>
        <Grid container direction="column" spacing={3} alignItems="center">
          <Grid item>
            <Button
              variant="contained"
              size="large"
              sx={{ padding: 2, width: "25vh" }}
              onClick={() => {
                nav("/StampList");
              }}
            >
              <Typography variant="h5">スタンプ一覧</Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              size="large"
              sx={{ padding: 2, width: "25vh" }}
            >
              <Typography variant="h5">参加方法</Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              size="large"
              sx={{ padding: 2, width: "25vh" }}
            >
              <Typography variant="h5">NKC-UGとは？</Typography>
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
