import { Routes, Route } from "react-router-dom";
import Catalog from "../pages/Catalog";
import ProductDetail from "../pages/ProductDetail";
import Layout from "../components/Layout";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Catalog />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
