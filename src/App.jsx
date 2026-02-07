import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import SalesDashboard from "./pages/SalesDashboard";
import QualityDashboard from "./pages/QualityDashboard";
import About from "./pages/About";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sales" element={<SalesDashboard />} />
            <Route path="/quality" element={<QualityDashboard />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;