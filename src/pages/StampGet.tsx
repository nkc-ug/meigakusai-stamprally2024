import { Box, Button, Container, Typography } from "@mui/material";
import bgimg from "../assets/images/bg/home.png";
import { useNavigate, useParams } from "react-router-dom";
import jsondata from "../assets/json/stamplist.json";
import { SetStampData } from "../component/StampData";

import { HashingSha1 } from "../component/HashingSha1";

export const StampGet = () => {
  const nav = useNavigate();
  const id = useParams();
  const imagesPath = "/src/assets/images/stamp/";

  const ImgPathGet = () => {
    const shopData = jsondata
      .map((location) =>
        location.shop.find((data) => {
          if (HashingSha1(String(data.id)) === String(id.id)) {
            SetStampData(String(id.id));
            return true;
          }
        })
      )
      .find((shop) => shop !== undefined);

    return shopData ? `${imagesPath}${shopData.imagepath}` : "";
  };
  SetStampData(String(id.id));

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
          <img src={ImgPathGet()} alt="stamp" />
        </Box>

        <Button
          variant="contained"
          size="large"
          sx={{ padding: 2, width: "25vh" }}
          onClick={() => {
            nav("/");
          }}
        >
          スタンプ一覧へ
        </Button>
      </Box>
    </Container>
  );
};
