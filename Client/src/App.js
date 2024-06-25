import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClientRoutes from "./routes/ClientRoutes";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/*" element={<ClientRoutes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
