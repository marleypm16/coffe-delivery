import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../App";
import Checkout from "../components/checkout/Checkout";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
