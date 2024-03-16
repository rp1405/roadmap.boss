import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import DetailPage from "./Components/DetailPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/topic">
        <Route path=":id" element={<DetailPage />} />
      </Route>
    </Routes>
  );
}
export default App;
