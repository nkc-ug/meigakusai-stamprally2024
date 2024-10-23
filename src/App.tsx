import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { StampGet } from "./pages/StampGet";
import { ParticipationGuide } from "./pages/ParticipationGuid";
import { Container } from "@mui/material";
import bgimg from "/src/assets/images/bg/home.png";

function App() {
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
      }}
    >
      <BrowserRouter basename="/meigakusai-stamprally2024/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/participation" element={<ParticipationGuide />} />
          <Route path="/stampget/:id" element={<StampGet />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
