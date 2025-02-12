import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import Checkout from "../components/checkout/Checkout";

function AppRouter() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} /> {/* Sem a barra inicial */}
      </Routes>
    </Router>
  );
}

export default AppRouter;
