import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Room } from "./pages/Room";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route cơ bản */}
        <Route path="/" element={<Home />} />
        <Route path="/room/:roomId" element={<Room />} />
        {/* Route không khớp */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
