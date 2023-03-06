/* import React from "react";


const TestSection = () => {
  return <div className="h-screen"></div>;
};

export default TestSection;
 */
import React from "react";
import Footer from "../../components/Footer/Footer";
import { Link, useParams } from "react-router-dom";
import { ReactComponent as Home } from "../../svgs/home.svg";
import { ReactComponent as ChevRight } from "../../svgs/chevronRight.svg";
import { ReactComponent as InfoIcon } from "../../svgs/infoIcon.svg";
import { ReactComponent as FavIcon } from "../../svgs/favIcon.svg";
import { useState, useEffect } from "react";
import AddToCartBtn from "../../components/AddToCartBtn/AddToCartBtn";
import ProductCardMedium from "../../components/ProductCardMedium/ProductCardMedium";
import { useSelector } from "react-redux";
const ProudctPage = () => {
  const { id, div } = useParams();
  const allProducts = useSelector((state) => state.allProducts.state);
  const product =
    allProducts && allProducts.find((product) => product._id === id);

  allProducts ? console.log(allProducts) : console.log("notYet");

  const [img, setImg] = useState(product.images[0]);
  const useImage = (e) => {
    const imgUrl = e.target.src;
    setImg(imgUrl);
  };
  return (
    <div>
      <header className="bg-primary h-28 ">
        <div className="header-content h-28 px-6 flex items-center md:justify-between max-w-[1250px] mx-auto sm:flex-col md:flex-row sm:justify-evenly">
          <h1 className="text-xl text-faded ">{product.title}</h1>
          <div className="flex items-center">
            <Link to="/">
              <p className="flex items-center gap-1 text-faded text-sm">
                <span>
                  <Home className="h-6 w-6 stroke-faded" />
                </span>{" "}
                Home
              </p>{" "}
            </Link>
            <ChevRight className="h-6 w-6 stroke-faded" />
            <Link to={"/shop"}>
              <p className="text-faded text-sm">Shop</p>
            </Link>
            <ChevRight className="h-6 w-6 stroke-faded" />
            <p className="text-lightest text-sm">Product</p>
          </div>
        </div>
      </header>
      <div>
        <div className="bg-primary h-20"></div>
        {/* ==================== Top Body ==================== */}
        <div className="max-w-[1250px] mx-auto px-6">
          <div className="quickView py-6 relative  top-[-85px] mx-auto h-auto flex flex-col bg-white rounded-lg shadow-md">
            <div className="bodyQuick  flex sm:flex-col md:flex-row gap-4 px-6">
              <div className="images flex justify-end md:w-[60%] sm:w-full flex-col-reverse">
                <div className="allImages grid  grid-cols-4   items-center justify-center  p-2 gap-4">
                  {product.images &&
                    product.images.map((image, i) => {
                      return (
                        <img
                          onClick={useImage}
                          key={i}
                          className={`border-2 rounded-lg h-full cursor-pointer hover:opacity-100 transition-all 
                  ${
                    img === image ? "opacity-100 border-primary" : "opacity-50"
                  }`}
                          src={image}
                          alt="Product Image"
                        />
                      );
                    })}
                </div>
                <div className="bigImage">
                  <div className="h-[400px] flex items-center justify-center overflow-hidden">
                    <img src={img} alt={product.title} />
                  </div>
                </div>
              </div>
              <div className="info flex-[4]">
                <p className="text-xl">{product.title}</p>
                <p className="mb-4 ">
                  <span className="font-semibold ">Brand:</span> {product.brand}
                </p>
                <p className="text-2xl mb-4 font-semibold text-primary">
                  ${product.price}.00
                </p>
                <p className="font-semibold mb-1">Size:</p>
                <select className="focus:outline-none px-1 py-2 mb-4 w-full rounded-md border border-primary text-md">
                  {product &&
                    product.sizes.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                </select>
                <div className="pickSize flex gap-4 items-center mb-6 whitespace-nowrap justify-center ">
                  <select className="focus:outline-none px-1 py-2  rounded-md border border-primary text-md">
                    <option value="value">1</option>
                    <option value="value">2</option>
                    <option value="value">3</option>
                    <option value="value">4</option>
                    <option value="value">5</option>
                  </select>
                  <AddToCartBtn item={product} />
                </div>
                <div className="flex justify-between border-b pb-1 mb-4">
                  <p className="font-semibold text-xl  pb-2 flex items-center ">
                    <InfoIcon className="h-8 w-8 stroke-medium mr-1" />
                    Product info
                  </p>
                  <FavIcon className="stroke-medium hover:stroke-press cursor-pointer h-8 w-8" />
                </div>
                <p className="font-semibold">Category</p>
                <p className="mb-4 pl-1">{product.category}</p>
                <p className="font-semibold">Key features</p>
                {product &&
                  product.features.map((feature, i) =>
                    i < 5 ? (
                      <p key={`${i}ss`} className="pl-1">
                        {feature}
                      </p>
                    ) : (
                      ""
                    )
                  )}
              </div>
            </div>
          </div>
        </div>
        {/* ==================== Middle Body ==================== */}
        <div className="max-w-[1250px] mx-auto px-6 ">
          <div className="py-6  mx-auto h-auto flex flex-col bg-white rounded-lg ">
            <p className=" font-semibold  mb-2 text-primary">
              Product discription
            </p>
            <p className="max-w-[600px] mb-10 pl-4">{product.discription}.</p>
            <p className=" font-semibold mb-4 text-primary">Main Features</p>
            <ul className="list-disc pl-4 max-w-[600px]">
              {product &&
                product.features.map((feature, i) => (
                  <li key={i} className="mb-1">
                    {feature}
                  </li>
                ))}
            </ul>
          </div>
        </div>
        {/* ==================== Bottom Body ==================== */}
      </div>
      <div className="max-w-[1250px] mx-auto px-6 mt-10 ">
        <h2 className="text-2xl font-semibold mb-4 text-primary border-b pb-3">
          Related products
        </h2>
        <div className="flex featured-box px-4 my-10 gap-6 overflow-x-scroll">
          {}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProudctPage;
