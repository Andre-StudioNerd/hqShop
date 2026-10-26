import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import CartPage from "../pages/CartPage";
import About from "../pages/About";
import PrivacyPolicy from "../pages/Policy";
import ShippingPolicy from "../pages/Delivery";
import WarrantyPolicy from "../pages/Warranty";
import Login from "../pages/Login";
import NotFound from "../pages/Not-Found";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/produto/:id" element={<ProductDetailsPage />} />
      <Route path="/carrinho" element={<CartPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/policy" element={<PrivacyPolicy />} />
      <Route path="/shippingpolicy" element={<ShippingPolicy />} />
      <Route path="/warranty" element={<WarrantyPolicy />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
