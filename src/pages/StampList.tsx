import { Box, Button, Container, Grid, Typography } from "@mui/material";
import bgimg from "../assets/images/bg/home.png";

export const StampList = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: "100vh",
        minWidth: "100vw",
        height: "100%",
        width: "100%",
        textAlign: "center",
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Typography variant="h3" sx={{ marginBottom: 4 }}>
          スタンプ一覧
        </Typography>
        <Grid container direction="column" spacing={3} alignItems="center">
          <Grid item>
            <Button
              variant="contained"
              size="large"
              sx={{ padding: 2, width: "25vh" }}
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
