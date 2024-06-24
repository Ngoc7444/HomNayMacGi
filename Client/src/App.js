import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClientRoutes from "./routes/ClientRoutes";
import AdminRoutes from "./routes/AdminRoutes";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/admin/*" element={<AdminRoutes />} />
          <Route path="/*" element={<ClientRoutes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
