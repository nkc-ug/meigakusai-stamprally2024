import { Box, Button, Container, Grid, Typography } from "@mui/material";
import bgimg from "../assets/images/bg/home.png";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const nav = useNavigate();

  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: "100vh",
        padding: 2,
        textAlign: "center",
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "auto 100%",
        backgroundPosition: "center top",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box>
        <Typography variant="h4" sx={{ marginBottom: 4 }}>
          名学祭スタンプラリー
        </Typography>
        <Grid container direction="column" spacing={3} alignItems="center">
          <Grid item>
            <Button
              variant="contained"
              size="large"
              sx={{ padding: 2, width: "25vh" }}
              onClick={() => {
                nav("/stamplist");
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
              onClick={() => {
                window.open(
                  "https://forms.office.com/Pages/ResponsePage.aspx?id=eeUPGhB_lUOsHmxSoVCbiP4hXRkgLplMkTlk7A0MQPlURDFRNllBTFBUWE9WQU5aTlBYUFhKSDNFNy4u"
                );
              }}
            >
              <Typography variant="h5">お問い合わせ</Typography>
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
