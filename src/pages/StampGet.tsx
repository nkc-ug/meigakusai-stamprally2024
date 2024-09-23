import { Box, Button, Card, Container, Typography } from "@mui/material";
import bgimg from "../assets/images/bg/home.png";
import { useNavigate, useParams } from "react-router-dom";
import jsondata from "../assets/json/stamplist.json";
import { SetStampData } from "../component/StampData";
import { HashingSha1 } from "../component/HashingSha1";
import { useEffect, useState } from "react";
import { useReward } from "react-rewards";
import { StampImage } from "../component/StampImage";

export const StampGet = () => {
  const nav = useNavigate();
  const id = useParams();
  const [stampData, setStampData] = useState({
    shopname: "",
    classname: "",
    imagepath: "",
  });

  const StampCheck = () => {
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
    useEffect(() => {
      setStampData({
        shopname: shopData ? shopData.name : "",
        classname: shopData ? shopData.classname : "",
        imagepath: shopData ? shopData.imagepath : "",
      });
    }, [shopData]);
    return shopData ? <SuccessProcess /> : <ErrorProcess />;
  };

  const SuccessProcess = () => {
    const { reward } = useReward("rewardId", "confetti");
    useEffect(() => {
      reward();
    }, [reward]);
    return (
      <>
        <Card
          sx={{ borderRadius: "20px", marginY: "20px", padding: "20px" }}
          id="rewardId"
        >
          <Typography variant="h4">スタンプゲット！</Typography>
          <Box>
            <img src={StampImage(stampData.imagepath)} alt="stamp" />
            <Typography variant="h5">{stampData.shopname}</Typography>
            <Typography variant="h5">{stampData.classname}</Typography>
          </Box>
        </Card>
      </>
    );
  };

  const ErrorProcess = () => {
    const typoPadding = "5px";
    return (
      <Box sx={{ margin: "10px" }}>
        <Typography variant="h3" sx={{ padding: typoPadding }}>
          エラー
        </Typography>
        <Typography variant="h5" sx={{ padding: typoPadding }}>
          指定されたスタンプは
          <br />
          存在しません
        </Typography>
        <Typography variant="h6" sx={{ padding: typoPadding }}>
          不具合については
          <br />
          模擬店では対応いたしかねますので
          <br />
          下部の
          <b>お問い合わせ</b>ボタンから
          <br />
          スタンプラリー運営まで
          <br />
          ご連絡お願いします
        </Typography>
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
          お問い合わせ
        </Button>
      </Box>
    );
  };

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
        {StampCheck()}
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
