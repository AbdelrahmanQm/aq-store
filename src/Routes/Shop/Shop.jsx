import React from "react";
import { Route, Routes } from "react-router-dom";
import ShopCategories from "../../components/ShopCategories/ShopCategories";
import Category from "../Category/Category";
import ProudctPage from "../ProudctPage/ProudctPage";
import TopAndBest from "../TopAndBest/BestSellers";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<ShopCategories />} />
      <Route path=":div" element={<Category />} />
      <Route path=":div/:id" element={<ProudctPage />} />
    </Routes>
  );
};

export default Shop;
