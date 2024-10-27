import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { StampGet } from "./pages/StampGet";
import { ParticipationGuide } from "./pages/ParticipationGuid";
import { Box, Container } from "@mui/material";
import bgimg from "/src/assets/images/bg/home.png";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: "100vh",
        padding: 2,
        textAlign: "center",
        clipPath: "inset(0)",
      }}
    >
      <Box
        component="img"
        src={bgimg}
        sx={{
          width: "auto",
          height: "100%",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)", // 中央に配置
          zIndex: "-1",
        }}
      />
      <BrowserRouter basename="/meigakusai-stamprally2024/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/participation" element={<ParticipationGuide />} />
          <Route path="/stampget/:id" element={<StampGet />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
