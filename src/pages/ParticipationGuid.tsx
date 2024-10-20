import {
  Button,
  Card,
  Container,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import bgimg from "../assets/images/bg/home.png";

export const ParticipationGuide = () => {
  const nav = useNavigate();

  return (
    <Container
      sx={{
        minHeight: "100vh",
        padding: "10px",
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "auto 100vh",
        backgroundPosition: "center top",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          borderRadius: "20px",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">
          スタンプラリーの
          <br />
          参加方法
        </Typography>
        <Typography variant="h6">
          <List>
            <ListItem>1, 模擬店で商品の購入や体験をする</ListItem>
            <ListItem>2, 提示されたQRコードを読み取る</ListItem>
            <ListItem>3, スタンプ獲得！</ListItem>
            <ListItem>
              4, 目標数集めたら６号館１階の景品引換所で景品をゲット！
            </ListItem>
          </List>
        </Typography>
        <Typography variant="h5" sx={{ color: "red" }}>
          ！！注意点！！
        </Typography>
        <Typography variant="h6">
          <List>
            <ListItem>
              シークレットモードやプライベートモードで参加されるとスタンプが記録できません！
            </ListItem>
            <ListItem>
              ブラウザ,端末間でのスタンプ取得状況の共有は出来ませんので気を付けてください！
            </ListItem>
            <ListItem>
              当サイトはcookieを利用してスタンプを記録しているためcookieの許可をお願いします！
            </ListItem>
            <ListItem>
              スタンプのデータは最終取得から７日後に自動的に削除されます
            </ListItem>
          </List>
        </Typography>
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
      </Card>
    </Container>
  );
};
