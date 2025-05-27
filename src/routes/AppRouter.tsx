import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import Layout from "../layout/Layout";
import Checkout from "../components/checkout/Checkout";
import Order from "../components/order/Order";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order" element={<Order/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
