import React from "react";
import Footer from "../../components/Footer/Footer";
import { shopCategories } from "../../assets";
import CategoryShop from "../../components/CategoryShop/CategoryShop";
import ShopBestSeller from "../../components/ShopBestSeller/ShopBestSeller";
import ShopNewArrival from "../../components/ShopNewArrival/ShopNewArrival";
const ShopCategories = () => {
  return (
    <div>
      <header className="bg-primary h-32 ">
        <div className="header-content h-32 px-6 flex items-center justify-start max-w-[1250px] mx-auto">
          <h1 className="text-3xl text-faded ">Shop</h1>
        </div>
      </header>
      <div>
        <div className="flex max-w-[1250px] mx-auto px-6 gap-6 mt-10 lg:flex-row sm:flex-col">
          <ShopBestSeller />
          <ShopNewArrival />
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 smd:grid-cols-1 sm:grid-col-1  gap-x-6 gap-y-4 px-6 max-w-[1250px] mx-auto mt-10 ">
          {shopCategories.map((category) => (
            <CategoryShop key={category.id} category={category} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShopCategories;
