import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import DetailPage from "./Components/DetailPage";
import Quiz from "./Components/Quiz";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/topic">
        <Route path=":id" element={<DetailPage />} />
      </Route>
      <Route path="/quiz">
        <Route path=":id" element={<Quiz />} />
      </Route>
    </Routes>
  );
}
export default App;
