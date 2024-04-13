import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Developers from "./pages/Developers.jsx";
import DeveloperDetail from "./pages/DeveloperDetail.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/developer/:id" element={<DeveloperDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
