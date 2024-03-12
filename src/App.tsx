import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import DetailPage from "./Components/DetailPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/details" element={<DetailPage />} />
    </Routes>
  );
}
export default App;
