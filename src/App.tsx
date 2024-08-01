import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { StampList } from "./pages/StampList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/StampList/" element={<StampList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
