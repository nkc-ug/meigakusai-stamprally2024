import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { StampList } from "./pages/StampList";
import { Debug } from "./pages/Debug";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stamplist" element={<StampList />} />
        <Route path="/debug" element={<Debug />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
